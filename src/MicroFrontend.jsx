import React, { useEffect, useState } from 'react';

const MicroFrontend = ({ url, render }) => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let scriptId = url;
    const loadJS = function (url, implementationCode, location) {
      setLoading(true);

      const scriptTag = document.createElement('script');
      scriptTag.type = 'module';
      scriptTag.id = scriptId;
      scriptTag.src = url;

      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;

      location.appendChild(scriptTag);
    };
    const callBack = function () {
      //your code goes here
      setLoading(false);
    };
    loadJS(url, callBack, document.body);

    return () => document.getElementById(url).remove();
  }, []);
  if (loading) return <p>Loading...</p>;

  return render;
};

export default MicroFrontend;
