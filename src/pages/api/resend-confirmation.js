export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email');

    if (!email) {
      return new Response(JSON.stringify({ 
        error: 'Email is required' 
      }), { 
        status: 400 
      });
    }

    const listmonk_domain_url = import.meta.env.LISTMONK_DOMAIN_URL;
    if (!listmonk_domain_url) {
      console.error('LISTMONK_DOMAIN_URL environment variable is not set');
      return new Response(JSON.stringify({ 
        error: 'Server configuration error' 
      }), { 
        status: 500 
      });
    }

    const apiUser = import.meta.env.LISTMONK_API_USER;
    const apiToken = import.meta.env.LISTMONK_API_TOKEN;
    
    if (!apiUser || !apiToken) {
      console.error('LISTMONK_API_USER or LISTMONK_API_TOKEN environment variable is not set');
      return new Response(JSON.stringify({ 
        error: 'Server configuration error when invoking listmonk' 
      }), { 
        status: 500 
      });
    }

    const emailQuery = encodeURIComponent(`subscribers.email = '${email}'`);
    const subscriberResponse = await fetch(`${listmonk_domain_url}/api/subscribers?query=${emailQuery}`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${apiUser}:${apiToken}`).toString('base64')}`
      }
    });

    if (!subscriberResponse.ok) {
      throw new Error(`Failed to fetch subscriber: ${subscriberResponse.status}`);
    }

    const subscribers = await subscriberResponse.json();
    //console.log('Subscriber response:', subscribers); // Debug log
    console.log('Resending confirmation email.  Subscriber lookup:', {
      email: email,
      total: subscribers.data?.results ? subscribers.data.results.length : 0
    });

    if (!subscribers?.data?.results) {
      throw new Error('Invalid response format from Listmonk API');
    }

    if (subscribers.data.results.length === 0) {
      return new Response(JSON.stringify({ 
        error: 'Subscriber not found' 
      }), { 
        status: 404 
      });
    }

    if (subscribers.data.results.length > 1) {
      throw new Error('Multiple subscribers found for email');
    }

    const subscriber = subscribers.data.results[0];
    
    // Now we can send the optin confirmation
    const response = await fetch(`${listmonk_domain_url}/api/subscribers/${subscriber.id}/optin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${apiUser}:${apiToken}`).toString('base64')}`
      }
    });

    if (!response.ok) {
      throw new Error(`Listmonk responded with ${response.status}`);
    }

    return new Response(JSON.stringify({ 
      message: 'Confirmation email resent' 
    }), { 
      status: 200 
    });

  } catch (error) {
    if (!(error instanceof TypeError)) {
      console.error('Resend confirmation error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    return new Response(JSON.stringify({ 
      error: 'Failed to resend confirmation email',
      details: error.message  // Optionally add this for debugging, remove in production
    }), { 
      status: 500 
    });
  }
}; 