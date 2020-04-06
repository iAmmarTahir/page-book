export const getIframeDocument = (id) => {
  if (document.getElementById(id).contentDocument) {
    return document.getElementById(id).contentDocument;
  } else {
    return document.frames[id].document;
  }
};
