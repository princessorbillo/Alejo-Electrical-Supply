document.addEventListener('DOMContentLoaded', () => {
  // 1. Get Product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  let productId = urlParams.get('id');

  // Default to first product if none specified or invalid
  let product = window.products.find(p => p.id === productId);
  if (!product && window.products.length > 0) {
    product = window.products[0];
  }

  // 2. Populate Page Content
  if (product) {
    document.title = `${product.name} — Alejo Electrical Supply`;
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-image').src = product.image;
    
    // Shipping & Uses
    if (product.shippingInfo) document.getElementById('product-shipping').textContent = product.shippingInfo;
    if (product.uses) document.getElementById('product-uses').textContent = product.uses;
    if (product.usesImage) document.getElementById('uses-image').src = product.usesImage;
    
    // PDF link
    const pdfLinks = document.querySelectorAll('.pdf-download-link');
    pdfLinks.forEach(link => link.href = product.pdf);

    // Populate Specifications Table
    const specsBody = document.getElementById('specs-body');
    if (product.specifications && product.specifications.length > 0) {
      product.specifications.forEach(spec => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${spec.feature}</td><td>${spec.description}</td>`;
        specsBody.appendChild(tr);
      });
    }

    // Populate Applications
    const appsList = document.getElementById('apps-list');
    if (product.applications && product.applications.length > 0) {
      product.applications.forEach(app => {
        const li = document.createElement('li');
        li.textContent = app;
        appsList.appendChild(li);
      });
    }

    // Populate Features
    const featuresList = document.getElementById('features-list');
    if (product.features && product.features.length > 0) {
      product.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        featuresList.appendChild(li);
      });
    }

    // Update Quote Form Title
    document.getElementById('quote-title').textContent = `REQUEST FOR INFORMATION - ${product.name.toUpperCase()}`;
  }

  // 3. Tab Switching Logic
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContents = document.querySelectorAll('.tab-content');

  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all
      tabItems.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active to clicked
      item.classList.add('active');
      const targetId = `tab-${item.dataset.tab}`;
      document.getElementById(targetId).classList.add('active');
    });
  });

  // 4. Quote Modal Logic
  const quoteBtn = document.getElementById('quote-btn');
  const quoteModal = document.getElementById('quote-modal');
  const quoteClose = document.getElementById('quote-close');
  const quoteForm = document.getElementById('quote-form');
  const fileUploadBtn = document.querySelector('.btn-upload');
  const fileInput = document.getElementById('file-upload');
  const fileNameDisplay = document.querySelector('.file-name');

  if (quoteBtn && quoteModal) {
    quoteBtn.addEventListener('click', () => {
      quoteModal.classList.add('open');
      document.body.classList.add('no-scroll');
    });

    quoteClose.addEventListener('click', () => {
      quoteModal.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });

    // Close on outside click
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        quoteModal.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // File Upload Logic
  if (fileUploadBtn && fileInput) {
    fileUploadBtn.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
      } else {
        fileNameDisplay.textContent = '';
      }
    });
  }

  // Form Submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = quoteForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(quoteForm);
        
        // Add product name to the form data implicitly
        formData.append('Product', product.name);
        
        const response = await fetch(quoteForm.action, {
          method: "POST",
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert(`Thank you for your inquiry about ${product.name}! We will get back to you shortly.`);
          quoteModal.classList.remove('open');
          document.body.classList.remove('no-scroll');
          quoteForm.reset();
          if(fileNameDisplay) fileNameDisplay.textContent = '';
        } else {
          alert('Oops! There was a problem submitting your form. Please try again.');
        }
      } catch (error) {
        alert('Oops! There was a problem submitting your form. Please check your connection.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});
