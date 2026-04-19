import React from 'react';

// Factory that wraps an imported SVG asset URL into a component matching the
// lucide-react icon API (size / className props), so existing usages like
// `<Icon size={24} className="..." />` continue to work unchanged.
export function createBrandIcon(src, altText) {
    const Icon = ({ size = 24, className = '' }) => (
        <img
            src={src}
            alt={altText}
            width={size}
            height={size}
            className={className}
            draggable={false}
            style={{ display: 'inline-block', objectFit: 'contain' }}
        />
    );
    Icon.displayName = `BrandIcon(${altText})`;
    return Icon;
}
