/**
 * VIBRA - Event Detail Modal Component
 * Reusable modal with Swiper gallery + event info
 */
import { eventsData } from '../data/events-data.js';

// ===== Modal HTML template =====
const MODAL_HTML = `
<div class="event-modal" id="eventModal" role="dialog" aria-modal="true" aria-label="Détail de l'événement">
  <div class="event-modal__backdrop"></div>
  <div class="event-modal__container">
    <button class="event-modal__close" aria-label="Fermer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <div class="event-modal__content">
      <div class="event-modal__gallery">
        <div class="swiper event-modal-swiper">
          <div class="swiper-wrapper" id="modalSwiperWrapper"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="event-modal__info">
        <span class="event-modal__category" id="modalCategory"></span>
        <h2 class="event-modal__title" id="modalTitle"></h2>
        <p class="event-modal__subtitle" id="modalSubtitle"></p>
        <div class="event-modal__meta">
          <div class="event-modal__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span id="modalLocation"></span>
          </div>
          <div class="event-modal__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span id="modalDate"></span>
          </div>
        </div>
        <div class="event-modal__divider"></div>
        <p class="event-modal__description" id="modalDescription"></p>
        <a href="devis.html" class="event-modal__cta">
          Demander un devis similaire
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
`;

// ===== State =====
let modalEl = null;
let modalSwiper = null;
let triggerElement = null; // store the element that opened the modal for focus restore

// ===== Inject modal into DOM =====
function injectModal() {
  if (document.getElementById('eventModal')) return;
  document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
  modalEl = document.getElementById('eventModal');

  // Close events
  modalEl.querySelector('.event-modal__backdrop').addEventListener('click', closeModal);
  modalEl.querySelector('.event-modal__close').addEventListener('click', closeModal);
}

// ===== Open modal =====
function openModal(eventId) {
  const data = eventsData[eventId];
  if (!data || !modalEl) return;

  triggerElement = document.activeElement;

  // Fill content
  document.getElementById('modalCategory').textContent = data.category;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle;
  document.getElementById('modalLocation').textContent = data.location;
  document.getElementById('modalDate').textContent = data.date;
  document.getElementById('modalDescription').textContent = data.description;

  // Build gallery slides
  const wrapper = document.getElementById('modalSwiperWrapper');
  wrapper.innerHTML = data.images.map(src =>
    `<div class="swiper-slide"><img src="${src}" alt="${data.title}" loading="lazy"></div>`
  ).join('');

  // Destroy previous Swiper if exists
  if (modalSwiper) {
    modalSwiper.destroy(true, true);
    modalSwiper = null;
  }

  // Show modal
  modalEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Init Swiper (after DOM repaint)
  requestAnimationFrame(() => {
    if (typeof Swiper !== 'undefined') {
      modalSwiper = new Swiper('.event-modal-swiper', {
        loop: data.images.length > 1,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          prevEl: '.event-modal__gallery .swiper-button-prev',
          nextEl: '.event-modal__gallery .swiper-button-next',
        },
        pagination: {
          el: '.event-modal__gallery .swiper-pagination',
          clickable: true,
        },
      });
    }
  });

  // Focus the close button
  setTimeout(() => {
    modalEl.querySelector('.event-modal__close').focus();
  }, 100);
}

// ===== Close modal =====
function closeModal() {
  if (!modalEl) return;

  modalEl.classList.remove('is-open');
  document.body.style.overflow = '';

  // Destroy Swiper
  if (modalSwiper) {
    modalSwiper.destroy(true, true);
    modalSwiper = null;
  }

  // Restore focus
  if (triggerElement) {
    triggerElement.focus();
    triggerElement = null;
  }
}

// ===== Keyboard handler =====
function onKeyDown(e) {
  if (e.key === 'Escape' && modalEl && modalEl.classList.contains('is-open')) {
    closeModal();
  }
}

// ===== Click delegation =====
function onDocumentClick(e) {
  const trigger = e.target.closest('[data-event-id]');
  if (!trigger) return;

  // Guard: ignore clicks during Swiper drag/swipe
  const swiperEl = trigger.closest('.swiper');
  if (swiperEl && swiperEl.swiper && swiperEl.swiper.animating) return;

  e.preventDefault();
  const eventId = trigger.getAttribute('data-event-id');
  openModal(eventId);
}

// ===== Init =====
function initEventModal() {
  injectModal();
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeyDown);
}

// Auto-init on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEventModal);
} else {
  initEventModal();
}

export { initEventModal, openModal, closeModal };
