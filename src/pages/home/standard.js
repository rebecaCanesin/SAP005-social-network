export const timelineTags = () => {
  const template = `
  <button class='logOut' id='sgnOutBtn' type="submit">Logout</button>
 
  <form id="post-form">
    <input type="text" id="post-text" width="100px" height="60px"></input>
    <button id="form-button" type="submit">Publicar</button>
  </form>

  <div id="post-list">
  
  </div>

`;
  return template;
};