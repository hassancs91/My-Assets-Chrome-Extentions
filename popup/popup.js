// Emoji data structure
const emojiData = {
  smileys: [
    { emoji: '\u{1F600}', name: 'Grinning Face', keywords: ['smile', 'happy', 'joy'] },
    { emoji: '\u{1F603}', name: 'Grinning Face with Big Eyes', keywords: ['happy', 'joy', 'smile'] },
    //{ emoji: '\u{1F604}', name: 'Grinning Face with Smiling Eyes', keywords: ['happy', 'joy', 'laugh'] },
    { emoji: '\u{1F60A}', name: 'Smiling Face with Smiling Eyes', keywords: ['happy', 'warm', 'sweet'] },
    { emoji: '\u{1F970}', name: 'Smiling Face with Hearts', keywords: ['love', 'happy', 'affection'] },
    { emoji: '\u{1F60E}', name: 'Smiling Face with Sunglasses', keywords: ['cool', 'sun', 'happy'] }
  ],
  animals: [
    { emoji: '\u{1F436}', name: 'Dog Face', keywords: ['dog', 'pet', 'animal'] },
    { emoji: '\u{1F431}', name: 'Cat Face', keywords: ['cat', 'pet', 'animal'] },
    { emoji: '\u{1F981}', name: 'Lion', keywords: ['lion', 'animal', 'wild'] },
    { emoji: '\u{1F43C}', name: 'Panda', keywords: ['panda', 'animal', 'cute'] },
    { emoji: '\u{1F98A}', name: 'Fox', keywords: ['fox', 'animal', 'wild'] },
    { emoji: '\u{1F984}', name: 'Unicorn', keywords: ['unicorn', 'magic', 'fantasy'] }
  ],
  food: [
    { emoji: '\u{1F34E}', name: 'Red Apple', keywords: ['apple', 'fruit', 'food'] },
    { emoji: '\u{1F355}', name: 'Pizza', keywords: ['pizza', 'food', 'italian'] },
    { emoji: '\u{1F354}', name: 'Hamburger', keywords: ['burger', 'food', 'fast food'] },
    { emoji: '\u{1F366}', name: 'Ice Cream', keywords: ['ice cream', 'dessert', 'sweet'] },
    { emoji: '\u{1F36A}', name: 'Cookie', keywords: ['cookie', 'dessert', 'sweet'] },
    { emoji: '\u{1F36B}', name: 'Chocolate Bar', keywords: ['chocolate', 'sweet', 'dessert'] }
  ],
  activities: [
    { emoji: '\u{26BD}', name: 'Soccer Ball', keywords: ['soccer', 'football', 'sport'] },
    { emoji: '\u{1F3AE}', name: 'Video Game', keywords: ['game', 'play', 'controller'] },
    { emoji: '\u{1F3A8}', name: 'Artist Palette', keywords: ['art', 'paint', 'creative'] },
    { emoji: '\u{1F3AD}', name: 'Performing Arts', keywords: ['theater', 'drama', 'arts'] },
    { emoji: '\u{1F3AA}', name: 'Circus Tent', keywords: ['circus', 'carnival', 'festival'] },
    { emoji: '\u{1F3AF}', name: 'Direct Hit', keywords: ['target', 'game', 'bull\'s eye'] }
  ],
  travel: [
    { emoji: '\u{2708}\u{FE0F}', name: 'Airplane', keywords: ['plane', 'flight', 'travel'] },
    { emoji: '\u{1F697}', name: 'Car', keywords: ['car', 'auto', 'vehicle'] },
    { emoji: '\u{1F3D6}\u{FE0F}', name: 'Beach with Umbrella', keywords: ['beach', 'vacation', 'summer'] },
    { emoji: '\u{1F5FD}', name: 'Statue of Liberty', keywords: ['liberty', 'new york', 'usa'] },
    { emoji: '\u{1F5FC}', name: 'Tokyo Tower', keywords: ['tower', 'japan', 'tokyo'] },
    { emoji: '\u{1F3F0}', name: 'Castle', keywords: ['castle', 'building', 'fairy tale'] }
  ],
  objects: [
    { emoji: '\u{1F4F1}', name: 'Mobile Phone', keywords: ['phone', 'mobile', 'device'] },
    { emoji: '\u{1F4BB}', name: 'Laptop', keywords: ['computer', 'tech', 'work'] },
    { emoji: '\u{231A}', name: 'Watch', keywords: ['time', 'clock', 'accessory'] },
    { emoji: '\u{1F4F7}', name: 'Camera', keywords: ['photo', 'picture', 'image'] },
    { emoji: '\u{1F381}', name: 'Wrapped Gift', keywords: ['gift', 'present', 'birthday'] },
    { emoji: '\u{1F4DA}', name: 'Books', keywords: ['book', 'read', 'library'] }
  ],
  symbols: [
    { emoji: '\u{2764}\u{FE0F}', name: 'Red Heart', keywords: ['heart', 'love', 'like'] },
    { emoji: '\u{2B50}', name: 'Star', keywords: ['star', 'rating', 'favorite'] },
    { emoji: '\u{262E}\u{FE0F}', name: 'Peace Symbol', keywords: ['peace', 'harmony'] },
    { emoji: '\u{262F}\u{FE0F}', name: 'Yin Yang', keywords: ['balance', 'tao', 'harmony'] },
    { emoji: '\u{271D}\u{FE0F}', name: 'Latin Cross', keywords: ['cross', 'christian', 'religion'] },
    { emoji: '\u{262A}\u{FE0F}', name: 'Star and Crescent', keywords: ['islam', 'muslim', 'religion'] }
  ],
  flags: [
    { emoji: '\u{1F3C1}', name: 'Chequered Flag', keywords: ['finish', 'race', 'complete'] },
    { emoji: '\u{1F6A9}', name: 'Triangular Flag', keywords: ['flag', 'mark', 'location'] },
    { emoji: '\u{1F38C}', name: 'Crossed Flags', keywords: ['japan', 'nation', 'country'] },
    { emoji: '\u{1F3F4}\u{200D}\u{2620}\u{FE0F}', name: 'Pirate Flag', keywords: ['pirate', 'skull', 'crossbones'] },
    { emoji: '\u{1F3F3}\u{FE0F}\u{200D}\u{1F308}', name: 'Rainbow Flag', keywords: ['pride', 'lgbtq', 'rainbow'] },
    { emoji: '\u{1F3F3}\u{FE0F}', name: 'White Flag', keywords: ['surrender', 'peace', 'truce'] }
  ]
};

// Store DOM elements
const saveButton = document.getElementById('saveCurrentPage');
const descriptionInput = document.getElementById('description');
const tagsInput = document.getElementById('tags');
const tagFilter = document.getElementById('tagFilter');
const searchInput = document.getElementById('searchInput');
const linksList = document.getElementById('linksList');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Colors tab elements
const colorPicker = document.getElementById('colorPicker');
const addColorButton = document.getElementById('addColor');
const colorsGrid = document.getElementById('colorsGrid');

// Images tab elements
const imageUrlInput = document.getElementById('imageUrl');
const addImageButton = document.getElementById('addImage');
const imagesGrid = document.getElementById('imagesGrid');

// Emoji tab elements
const emojiSearch = document.getElementById('emojiSearch');
const emojiCategory = document.getElementById('emojiCategory');
const emojiGrid = document.getElementById('emojiGrid');
const emojiFavorites = document.getElementById('emojiFavorites');
const customEmojiInput = document.getElementById('customEmoji');
const addCustomEmojiButton = document.getElementById('addCustomEmoji');

// Tab switching functionality
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    const tabId = `${button.dataset.tab}-tab`;
    document.getElementById(tabId).classList.add('active');

    // Load content based on active tab
    const activeTab = button.dataset.tab;
    if (activeTab === 'colors') {
      loadColors();
    } else if (activeTab === 'images') {
      loadImages();
    } else if (activeTab === 'emojis') {
      loadEmojis();
      loadFavoriteEmojis();
    }
  });
});

// Colors functionality
addColorButton.addEventListener('click', async () => {
  const color = colorPicker.value;
  
  // Get existing colors
  const { colors = [] } = await chrome.storage.local.get('colors');
  
  // Add new color if it doesn't exist
  if (!colors.includes(color)) {
    colors.unshift(color);
    await chrome.storage.local.set({ colors });
    loadColors();
  }
});

// Load and display colors
async function loadColors() {
  const { colors = [] } = await chrome.storage.local.get('colors');
  
  colorsGrid.innerHTML = '';
  
  colors.forEach(color => {
    const colorElement = createColorElement(color);
    colorsGrid.appendChild(colorElement);
  });
}

// Create HTML element for a color
function createColorElement(color) {
  const div = document.createElement('div');
  div.className = 'color-item';
  
  div.innerHTML = `
    <div class="color-preview" style="background-color: ${color}"></div>
    <div class="color-hex">${color}</div>
    <div class="copied-tooltip">Copied!</div>
    <div class="color-actions">
      <button class="color-delete-button" title="Delete">
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  `;
  
  // Add click-to-copy functionality
  const colorPreview = div.querySelector('.color-preview');
  colorPreview.addEventListener('click', () => {
    navigator.clipboard.writeText(color);
    const tooltip = div.querySelector('.copied-tooltip');
    tooltip.classList.add('show');
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 1500);
  });

  // Add delete functionality
  const deleteButton = div.querySelector('.color-delete-button');
  deleteButton.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this color?')) {
      const { colors = [] } = await chrome.storage.local.get('colors');
      const updatedColors = colors.filter(c => c !== color);
      await chrome.storage.local.set({ colors: updatedColors });
      loadColors();
    }
  });
  
  return div;
}

// Load colors when popup opens if colors tab is active
document.addEventListener('DOMContentLoaded', () => {
  loadLinks();
  updateTagFilter();
  
  const activeTab = document.querySelector('.tab-button.active').dataset.tab;
  if (activeTab === 'colors') {
    loadColors();
  } else if (activeTab === 'images') {
    loadImages();
  }
});

// Images functionality
addImageButton.addEventListener('click', async () => {
  const url = imageUrlInput.value.trim();
  if (!url) return;

  // Create a temporary image to get dimensions
  const img = new Image();
  img.src = url;

  try {
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const imageData = {
      url: url,
      width: img.width,
      height: img.height,
      timestamp: Date.now()
    };

    // Get existing images
    const { images = [] } = await chrome.storage.local.get('images');
    
    // Add new image if it doesn't exist
    if (!images.some(img => img.url === url)) {
      images.unshift(imageData);
      await chrome.storage.local.set({ images });
      loadImages();
    }

    // Clear input
    imageUrlInput.value = '';

  } catch (error) {
    alert('Invalid image URL or image failed to load');
  }
});

// Load and display images
async function loadImages() {
  const { images = [] } = await chrome.storage.local.get('images');
  
  imagesGrid.innerHTML = '';
  
  images.forEach(image => {
    const imageElement = createImageElement(image);
    imagesGrid.appendChild(imageElement);
  });
}

// Create HTML element for an image
function createImageElement(image) {
  const div = document.createElement('div');
  div.className = 'image-item';
  
  div.innerHTML = `
    <img src="${image.url}" class="image-preview" alt="Saved image">
    <div class="image-dimensions">${image.width} &times; ${image.height}</div>
    <div class="image-actions">
      <button class="copy-url-button" title="Copy URL">
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      </button>
      <button class="delete-image-button" title="Delete">
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  `;
  
  // Add copy URL functionality
  const copyButton = div.querySelector('.copy-url-button');
  copyButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(image.url);
    const originalIcon = copyButton.innerHTML;
    copyButton.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    setTimeout(() => {
      copyButton.innerHTML = originalIcon;
    }, 1500);
  });

  // Add delete functionality
  const deleteButton = div.querySelector('.delete-image-button');
  deleteButton.addEventListener('click', async (e) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this image?')) {
      const { images = [] } = await chrome.storage.local.get('images');
      const updatedImages = images.filter(img => img.url !== image.url);
      await chrome.storage.local.set({ images: updatedImages });
      loadImages();
    }
  });
  
  return div;
}

// Load initial content when popup opens
document.addEventListener('DOMContentLoaded', () => {
  loadLinks();
  updateTagFilter();
  
  const activeTab = document.querySelector('.tab-button.active').dataset.tab;
  if (activeTab === 'colors') {
    loadColors();
  } else if (activeTab === 'images') {
    loadImages();
  } else if (activeTab === 'emojis') {
    loadEmojis();
    loadFavoriteEmojis();
  }
});

// Emoji functionality
async function loadEmojis() {
  const searchText = emojiSearch.value.toLowerCase();
  const category = emojiCategory.value;
  const { favoriteEmojis = [] } = await chrome.storage.local.get('favoriteEmojis');
  
  emojiGrid.innerHTML = '';
  
  // Get emojis based on category
  const emojisToShow = category ? [category] : Object.keys(emojiData);
  
  emojisToShow.forEach(categoryKey => {
    const categoryEmojis = emojiData[categoryKey].filter(emoji => {
      if (!searchText) return true;
      return emoji.name.toLowerCase().includes(searchText) ||
             emoji.keywords.some(keyword => keyword.includes(searchText));
    });
    
    categoryEmojis.forEach(emoji => {
      const emojiElement = createEmojiElement(emoji, favoriteEmojis.includes(emoji.emoji));
      emojiGrid.appendChild(emojiElement);
    });
  });
}

function createEmojiElement(emoji, isFavorite) {
  const div = document.createElement('div');
  div.className = 'emoji-item';
  
  div.innerHTML = `
    ${emoji.emoji}
    <div class="emoji-name-tooltip">${emoji.name}</div>
    <button class="emoji-favorite-button ${isFavorite ? 'active' : ''}" title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
      <svg viewBox="0 0 24 24" width="12" height="12">
        <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </button>
  `;
  
  // Add click-to-copy functionality
  div.addEventListener('click', (e) => {
    if (e.target.closest('.emoji-favorite-button')) return;
    navigator.clipboard.writeText(emoji.emoji);
    const tooltip = div.querySelector('.emoji-name-tooltip');
    tooltip.textContent = 'Copied!';
    setTimeout(() => {
      tooltip.textContent = emoji.name;
    }, 1500);
  });

  // Add favorite functionality
  const favoriteButton = div.querySelector('.emoji-favorite-button');
  favoriteButton.addEventListener('click', async () => {
    const { favoriteEmojis = [] } = await chrome.storage.local.get('favoriteEmojis');
    
    if (isFavorite) {
      const updatedFavorites = favoriteEmojis.filter(e => e !== emoji.emoji);
      await chrome.storage.local.set({ favoriteEmojis: updatedFavorites });
    } else {
      favoriteEmojis.unshift(emoji.emoji);
      await chrome.storage.local.set({ favoriteEmojis });
    }
    
    loadEmojis();
    loadFavoriteEmojis();
  });
  
  return div;
}

async function loadFavoriteEmojis() {
  const { favoriteEmojis = [] } = await chrome.storage.local.get('favoriteEmojis');
  
  emojiFavorites.innerHTML = '';
  
  if (favoriteEmojis.length === 0) {
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder-message';
    placeholder.textContent = 'No favorite emojis yet';
    emojiFavorites.appendChild(placeholder);
    return;
  }
  
  favoriteEmojis.forEach(emojiChar => {
    const emojiData = findEmojiData(emojiChar);
    let emojiElement;
    if (emojiData) {
      emojiElement = createEmojiElement(emojiData, true);
    } else {
      // Create element for custom emoji not in our predefined list
      emojiElement = createCustomEmojiElement(emojiChar);
    }
    emojiFavorites.appendChild(emojiElement);
  });
}

function findEmojiData(emojiChar) {
  for (const category of Object.values(emojiData)) {
    const found = category.find(e => e.emoji === emojiChar);
    if (found) return found;
  }
  return null;
}

function createCustomEmojiElement(emoji) {
  const div = document.createElement('div');
  div.className = 'emoji-item';
  
  div.innerHTML = `
    ${emoji}
    <div class="emoji-name-tooltip">Custom Emoji</div>
    <button class="emoji-favorite-button active" title="Remove from favorites">
      <svg viewBox="0 0 24 24" width="12" height="12">
        <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </button>
  `;
  
  // Add click-to-copy functionality
  div.addEventListener('click', (e) => {
    if (e.target.closest('.emoji-favorite-button')) return;
    navigator.clipboard.writeText(emoji);
    const tooltip = div.querySelector('.emoji-name-tooltip');
    tooltip.textContent = 'Copied!';
    setTimeout(() => {
      tooltip.textContent = 'Custom Emoji';
    }, 1500);
  });

  // Add favorite functionality
  const favoriteButton = div.querySelector('.emoji-favorite-button');
  favoriteButton.addEventListener('click', async () => {
    const { favoriteEmojis = [] } = await chrome.storage.local.get('favoriteEmojis');
    const updatedFavorites = favoriteEmojis.filter(e => e !== emoji);
    await chrome.storage.local.set({ favoriteEmojis: updatedFavorites });
    loadFavoriteEmojis();
  });
  
  return div;
}

// Add event listeners for emoji controls
emojiSearch.addEventListener('input', loadEmojis);
emojiCategory.addEventListener('change', loadEmojis);

// Add custom emoji functionality
addCustomEmojiButton.addEventListener('click', async () => {
  const emoji = customEmojiInput.value.trim();
  if (!emoji) return;

  const { favoriteEmojis = [] } = await chrome.storage.local.get('favoriteEmojis');
  
  if (!favoriteEmojis.includes(emoji)) {
    favoriteEmojis.unshift(emoji);
    await chrome.storage.local.set({ favoriteEmojis });
    loadFavoriteEmojis();
  }
  
  customEmojiInput.value = '';
});

// Add enter key support for custom emoji input
customEmojiInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addCustomEmojiButton.click();
  }
});

// Save current page
saveButton.addEventListener('click', async () => {
  const tab = await getCurrentTab();
  if (!tab) return;

  const link = {
    url: tab.url,
    title: tab.title,
    favicon: tab.favIconUrl || '',
    description: descriptionInput.value.trim(),
    tags: tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag),
    timestamp: Date.now()
  };

  // Get existing links
  const { links = [] } = await chrome.storage.local.get('links');
  
  // Add new link
  links.unshift(link);
  
  // Save to storage
  await chrome.storage.local.set({ links });
  
  // Reset inputs
  descriptionInput.value = '';
  tagsInput.value = '';
  
  // Refresh display
  loadLinks();
  updateTagFilter();
});

// Get current tab
async function getCurrentTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs[0];
}

// Load and display links
async function loadLinks() {
  const { links = [] } = await chrome.storage.local.get('links');
  const selectedTag = tagFilter.value;
  const searchText = searchInput.value.toLowerCase().trim();
  
  // Filter links by both tag and search text
  const filteredLinks = links.filter(link => {
    // Tag filter
    if (selectedTag && !link.tags.includes(selectedTag)) {
      return false;
    }
    
    // Search filter
    if (searchText) {
      const searchableText = [
        link.title.toLowerCase(),
        link.description.toLowerCase(),
        ...link.tags.map(tag => tag.toLowerCase())
      ].join(' ');
      
      if (!searchableText.includes(searchText)) {
        return false;
      }
    }
    
    return true;
  });
  
  linksList.innerHTML = '';
  
  if (filteredLinks.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'placeholder-message';
    noResults.textContent = 'No links found';
    linksList.appendChild(noResults);
    return;
  }
  
  filteredLinks.forEach(link => {
    const linkElement = createLinkElement(link);
    linksList.appendChild(linkElement);
  });
}

// Create HTML element for a link
function createLinkElement(link) {
  const div = document.createElement('div');
  div.className = 'link-item';
  
  div.innerHTML = `
    ${link.favicon ? `<img src="${link.favicon}" class="link-favicon" onerror="this.style.display='none'">` : ''}
    <div class="link-content">
      <div class="link-title">${link.title}</div>
      ${link.description ? `<div class="link-description">${link.description}</div>` : ''}
      ${link.tags.length ? `<div class="link-tags">Tags: ${link.tags.join(', ')}</div>` : ''}
    </div>
    <div class="button-group">
      <button class="copy-button" data-url="${link.url}">Copy</button>
      <button class="delete-button" data-url="${link.url}">Delete</button>
    </div>
  `;
  
  // Add copy functionality
  const copyButton = div.querySelector('.copy-button');
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(link.url);
    copyButton.textContent = 'Copied!';
    setTimeout(() => {
      copyButton.textContent = 'Copy';
    }, 1500);
  });

  // Add delete functionality
  const deleteButton = div.querySelector('.delete-button');
  deleteButton.addEventListener('click', async () => {
    if (confirm('Are you sure you want to delete this link?')) {
      const { links = [] } = await chrome.storage.local.get('links');
      const updatedLinks = links.filter(l => l.url !== link.url);
      await chrome.storage.local.set({ links: updatedLinks });
      loadLinks();
      updateTagFilter();
    }
  });
  
  return div;
}

// Update tag filter dropdown
async function updateTagFilter() {
  const { links = [] } = await chrome.storage.local.get('links');
  
  // Get unique tags
  const tags = [...new Set(links.flatMap(link => link.tags))].sort();
  
  // Save current selection
  const currentSelection = tagFilter.value;
  
  // Clear dropdown except for "All Tags" option
  tagFilter.innerHTML = '<option value="">All Tags</option>';
  
  // Add tags to dropdown
  tags.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  });
  
  // Restore selection if it still exists
  if (tags.includes(currentSelection)) {
    tagFilter.value = currentSelection;
  }
}

// Filter links when tag is selected or search input changes
tagFilter.addEventListener('change', loadLinks);
searchInput.addEventListener('input', loadLinks);
