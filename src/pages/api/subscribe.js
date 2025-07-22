export const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    const honeypot = formData.get('website_url');
    if (honeypot) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/success'
        }
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
    
    console.log('API endpoint hit: /api/subscribe');
    const response = await fetch(`${listmonk_domain_url}/subscription/form`, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/success'
        }
      });
    }

    // Get the error details from the response
    const errorData = await response.json().catch(() => null);
    console.error('Subscription failed:', {
      status: response.status,
      statusText: response.statusText,
      error: errorData
    });

    return new Response(JSON.stringify({ 
      error: 'Subscription failed' 
    }), { 
      status: 400 
    });

  } catch (error) {
    // Don't log TypeError instances
    if (!(error instanceof TypeError)) {
      console.error('Server error:', error);
    }
    
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), { 
      status: 500 
    });
  }
} 