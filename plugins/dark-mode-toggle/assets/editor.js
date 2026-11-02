/* Uses WordPress-provided packages; no build step or external CDN. */
(function (wp) {
  'use strict';
  const el = wp.element.createElement;
  const __ = wp.i18n.__;
  wp.blocks.registerBlockType('wordpress-toolkit/dark-mode-toggle', {
    title: __('Bouton mode sombre', 'dark-mode-toggle'),
    category: 'widgets', icon: 'lightbulb', apiVersion: 3,
    attributes: { label: { type: 'string', default: 'Mode sombre' }, showLabel: { type: 'boolean', default: true } },
    supports: { html: false },
    edit: function (props) {
      return el(wp.element.Fragment, null,
        el(wp.blockEditor.InspectorControls, null,
          el(wp.components.PanelBody, { title: __('Affichage', 'dark-mode-toggle') },
            el(wp.components.TextControl, { label: __('Libellé accessible', 'dark-mode-toggle'), value: props.attributes.label, onChange: label => props.setAttributes({ label }) }),
            el(wp.components.ToggleControl, { label: __('Afficher le libellé', 'dark-mode-toggle'), checked: props.attributes.showLabel, onChange: showLabel => props.setAttributes({ showLabel }) })
          )
        ),
        el('div', wp.blockEditor.useBlockProps({ className: 'wpt-dark-mode' }),
          el('span', { className: 'wpt-dark-mode__track', 'aria-hidden': true }, el('span', { className: 'wpt-dark-mode__thumb' })),
          props.attributes.showLabel ? el('span', null, props.attributes.label) : null,
          el('span', { className: 'wpt-dark-mode__system' }, __('Système', 'dark-mode-toggle'))
        )
      );
    },
    save: function () { return null; }
  });
})(window.wp);
