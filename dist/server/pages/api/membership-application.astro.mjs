export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_EMAIL_KEY": "3ece700b-ddea-4622-a917-81d4beec208b", "PUBLIC_HCAPTCHA_SITE_KEY": "214c9bf4-7e70-4db4-8c40-557e3f4c08a2", "SITE": "https://denver.space", "SSR": true};
console.log("All env variables:", Object.assign(__vite_import_meta_env__, { SPACE_SERVICES_API_URL: "http://sservices.dspace:3000", _: process.env._ }));
const space_services_api_url = "http://sservices.dspace:3000";
console.log("SPACE_SERVICES_API_URL configured:", space_services_api_url);
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const application = data;
    if (!application.name || !application.email || !application.preferred_contact_method || !application.primary_goals.length || !application.primary_services.length || !application.events.length || !application.core_values.length || !application.bitcoin_competence || !application.membership_option || !application.space_awareness.length || !application.consent) {
      return new Response(JSON.stringify({
        success: false,
        message: "Missing required fields"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    if (application.core_values.length !== 3) {
      return new Response(JSON.stringify({
        success: false,
        message: "Please select exactly three core values"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    console.log(
      "Submitting membership application:",
      JSON.stringify(application, null, 2)
    );
    const response = await fetch(`${space_services_api_url}/api/member-app`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
          "Content-Type": "application/json"
        }
      });
    }
    const result = await response.json();
    return new Response(JSON.stringify({
      success: true,
      message: "Application submitted successfully",
      data: result
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error processing membership application:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
