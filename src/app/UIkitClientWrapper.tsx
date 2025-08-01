// src/components/UIkitClientWrapper.tsx
"use client";

import { useEffect } from "react";

// Import CSS
import "uikit/dist/css/uikit.min.css";

// Import JS chỉ khi mounted
export default function UIkitClientWrapper() {
    useEffect(() => {
        // Dynamically import UIkit JS
        Promise.all([
            import("uikit/dist/js/uikit.min.js"),
            import("uikit/dist/js/uikit-icons.min.js")
        ]).then(([uikit, icons]) => {
            // Initialize UIkit icons
            (window as any).UIkit = uikit.default;
            (window as any).UIkit.use(icons.default);
        });
    }, []);

    return null;
}
