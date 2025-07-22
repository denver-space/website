import { defineConfig } from 'astro/config';

console.log('All env variables:', import.meta.env);

const space_services_api_url = import.meta.env.SPACE_SERVICES_API_URL;

if (!space_services_api_url) {
  console.error('SPACE_SERVICES_API_URL environment variable is not set');
  throw new Error('SPACE_SERVICES_API_URL environment variable is not set');
}

console.log('SPACE_SERVICES_API_URL configured:', space_services_api_url);

// Interface removed and converted to JSDoc for documentation
/**
 * @typedef {Object} MembershipApplication
 * @property {string} name
 * @property {'email' | 'telegram' | 'x' | 'nostr'} preferred_contact_method
 * @property {string[]} primary_goals - ['networking', 'workspace', 'events', 'learning', 'collaboration', 'other']
 * @property {string[]} primary_services - ['coworking', 'dedicated_space', 'events', 'community', 'amenities', 'other']
 * @property {string[]} events - ['social', 'technical', 'educational', 'bitcoin_only', 'bitcoin_adjacent', 'other']
 * @property {string} [other_interests]
 * @property {string[]} core_values - Exactly 3 values from the core values list
 * @property {'boating_accident' | 'continuing_education' | 'open_minded' | 'wrong_place'} bitcoin_competence
 * @property {string} [contributions]
 * @property {string} [existing_bitcoin_projects]
 * @property {string} [additional_info]
 * @property {'social' | 'coworking'} membership_option
 * @property {string[]} space_awareness - ['word_of_mouth', 'social_media', 'online_search', 'event', 'advertisement', 'other']
 * @property {string} [referral]
 * @property {'X' | 'S' | 'M' | 'L' | 'XL' | 'XXL'} [shirt_size]
 * @property {boolean} consent
 * @property {string} email
 * @property {string} [telegram]
 * @property {string} [x_twitter]
 * @property {string} [nostr]
 */

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const application = data;

    // Validate required fields
    if (!application.name ||
        !application.email ||
        !application.preferred_contact_method ||
        !application.primary_goals.length ||
        !application.primary_services.length ||
        !application.events.length ||
        !application.core_values.length ||
        !application.bitcoin_competence ||
        !application.membership_option ||
        !application.space_awareness.length ||
        !application.consent) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Missing required fields'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Rest of the code remains the same
    // ... existing validation and API call logic ...

    if (application.core_values.length !== 3) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Please select exactly three core values'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    console.log('Submitting membership application:', 
      JSON.stringify(application, null, 2)
    );

    const response = await fetch(`${space_services_api_url}/api/member-app`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(application)
    });

    if (!response.ok) {
      const errorData = await response.text();

      return new Response(JSON.stringify({
        success: false,
        message: errorData
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const result = await response.json();

    return new Response(JSON.stringify({
      success: true,
      message: 'Application submitted successfully',
      data: result
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error processing membership application:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};