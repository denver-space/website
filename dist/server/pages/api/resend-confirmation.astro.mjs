export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    if (!email) {
      return new Response(JSON.stringify({
        error: "Email is required"
      }), {
        status: 400
      });
    }
    const listmonk_domain_url = "http://listmonk.dspace:9000";
    if (!listmonk_domain_url) ;
    const apiUser = "listmonk_api";
    const apiToken = "kO4XiNwB0ywUkf9lfX75bZI51UUi57ED";
    if (!apiUser || !apiToken) ;
    const emailQuery = encodeURIComponent(`subscribers.email = '${email}'`);
    const subscriberResponse = await fetch(`${listmonk_domain_url}/api/subscribers?query=${emailQuery}`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${Buffer.from(`${apiUser}:${apiToken}`).toString("base64")}`
      }
    });
    if (!subscriberResponse.ok) {
      throw new Error(`Failed to fetch subscriber: ${subscriberResponse.status}`);
    }
    const subscribers = await subscriberResponse.json();
    console.log("Resending confirmation email.  Subscriber lookup:", {
      email,
      total: subscribers.data?.results ? subscribers.data.results.length : 0
    });
    if (!subscribers?.data?.results) {
      throw new Error("Invalid response format from Listmonk API");
    }
    if (subscribers.data.results.length === 0) {
      return new Response(JSON.stringify({
        error: "Subscriber not found"
      }), {
        status: 404
      });
    }
    if (subscribers.data.results.length > 1) {
      throw new Error("Multiple subscribers found for email");
    }
    const subscriber = subscribers.data.results[0];
    const response = await fetch(`${listmonk_domain_url}/api/subscribers/${subscriber.id}/optin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${Buffer.from(`${apiUser}:${apiToken}`).toString("base64")}`
      }
    });
    if (!response.ok) {
      throw new Error(`Listmonk responded with ${response.status}`);
    }
    return new Response(JSON.stringify({
      message: "Confirmation email resent"
    }), {
      status: 200
    });
  } catch (error) {
    if (!(error instanceof TypeError)) {
      console.error("Resend confirmation error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    return new Response(JSON.stringify({
      error: "Failed to resend confirmation email",
      details: error.message
      // Optionally add this for debugging, remove in production
    }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
