import React from 'react';

const Toolbar = (props: any) => {
  const { setZipCode } = props ?? {};

  const getNewForecast = (event: any) => {
    event.preventDefault();
    // Setting this to `any` to avoid HTML type twiddling.
    // `value` will always exist on a `text`-type <input>.
    const inputField: any = document.getElementById('zip-code');
    let newZipCode = inputField?.value ?? '';
    newZipCode = encodeURIComponent(newZipCode.trim());
    if (newZipCode.length !== 5) return;
    if (inputField) inputField.value = '';
    setZipCode(newZipCode);
  };
  
  return (
    // TODO: Rebuild this with flexbox. This breaks at lower resolutions.
    <article id="toolbar" className="flex justify-center w-100">
      <section className="flex items-center pv2 w-90 br3 mt5 ba b-black tc">
        <div className="w-one-third ma1">
          <span className="f4 white bg-black bold br3 pv2 ph4">Weather in...</span>
        </div>
        <div className="w-two-thirds mr5">
          <input
            id="zip-code"
            placeholder="Type in a ZIP Code"
            className="input-reset f4 w-100 bn outline-0 ph3"
            type="text" />
        </div>
        <div
          className="bg-black br3 pt1 ph4 white pointer ml5"
          onClick={getNewForecast}>
          <ion-icon name="search-outline" size="large" />
        </div>
      </section>
    </article>
  );
};

export default Toolbar;
