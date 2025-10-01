export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const honeypot = formData.get("website_url");
    if (honeypot) {
      return new Response(null, {
        status: 302,
        headers: {
          "Location": "/success"
        }
      });
    }
    const listmonk_domain_url = "http://listmonk.dspace:9000";
    if (!listmonk_domain_url) ;
    console.log("API endpoint hit: /api/subscribe");
    const response = await fetch(`${listmonk_domain_url}/subscription/form`, {
      method: "POST",
      body: formData
    });
    if (response.ok) {
      return new Response(null, {
        status: 302,
        headers: {
          "Location": "/success"
        }
      });
    }
    const errorData = await response.json().catch(() => null);
    console.error("Subscription failed:", {
      status: response.status,
      statusText: response.statusText,
      error: errorData
    });
    return new Response(JSON.stringify({
      error: "Subscription failed"
    }), {
      status: 400
    });
  } catch (error) {
    if (!(error instanceof TypeError)) {
      console.error("Server error:", error);
    }
    return new Response(JSON.stringify({
      error: "Internal server error"
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
