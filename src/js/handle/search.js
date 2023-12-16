const search = () => {
    const removeHighlighting = () => {
        const contentContainer = document.querySelector('body');
        contentContainer.innerHTML = contentContainer.innerHTML.replace(/<span class="highlight">([^<]+)<\/span>/gi, '$1');
      };
    document.getElementById('form-search-page').addEventListener('focusout', removeHighlighting);
    document.getElementById('form-search-page').addEventListener('submit', (event) => {
      event.preventDefault();
    
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const contentContainer = document.querySelector('main');
      const content = contentContainer.innerHTML;
      if (!searchTerm.trim() || searchTerm.trim() === '.' || searchTerm.trim() === ',') {
        alert('Tolong masukkan kata kunci yang benar!');
        return
      } else {
      // Remove previous highlights
      contentContainer.innerHTML = content.replace(/<span class="highlight">([^<]+)<\/span>/gi, '$1');
  
      // Create a temporary div element
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = contentContainer.innerHTML;
    
      // Perform the search and highlighting on the temporary div
      const regex = new RegExp(`(${searchTerm}(?:\\w|\\d)*)(?![^<]*>)`, 'gi');

      tempDiv.innerHTML = tempDiv.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
    
      // Replace the content of the original container with the modified content
      contentContainer.innerHTML = tempDiv.innerHTML;
      }
      const firstMatch = contentContainer.querySelector('.highlight');
        
      
    
      if (firstMatch) {
        const scrollTo = firstMatch.offsetTop - window.innerHeight / 2;
        window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      } else {
        alert(`Pencarian untuk kata kunci "${searchTerm}" tidak ditemukan`);
      }
    });
  };
  
  export default search;
  