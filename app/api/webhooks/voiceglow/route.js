export default function handler(req, res) {
    if (req.method === 'GET' || req.method === 'POST') {
        const info = {
            browserLanguage: req.headers["accept-language"] || "en",
            browserLinkHref: `${req.headers["x-forwarded-proto"] || req.protocol}://${req.headers.host}${req.url}`,
            browserMetadata: {
                from: "bot",
                type: "VGVF_Channel",
                data: {
                    url: `${req.headers["x-forwarded-proto"] || req.protocol}://${req.headers.host}${req.url}`
                }
            }
        };

        console.log("Browser Info:", info); // Log to server console
        res.status(200).json(info); // Respond with JSON data
    } else {
        // Handle unsupported methods
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
