import * as React from 'react';

export function Showcase({ onConnect }) {
  const sdkKey = 'yxszifc05b1bidcsqfr60806d';
  async function handleLoad() {
    const iframe = document.getElementById('showcase');
    const mpSdk = await window.MP_SDK.connect(
      iframe, // Obtained earlier
      sdkKey, // Your SDK key
      '' // Unused but needs to be a valid string
    );
    onConnect(mpSdk);
  }
  return (
    <iframe
      id="showcase"
      src={
        'https://my.matterport.com/show/?m=JGPnGQ6hosj&log=0&play=1&applicationKey=' +
        sdkKey
      }
      width="100%"
      height="450"
      onLoad={handleLoad}
    ></iframe>
  );
}
