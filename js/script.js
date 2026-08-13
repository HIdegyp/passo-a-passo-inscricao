const TOTAL_STEPS = 4;
let currentStep = 1;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stepItems = document.querySelectorAll('.steps__item');
const panels = document.querySelectorAll('.step[data-panel]');
const formStep1 = document.querySelector('#form-step-1');
const billingToggle = document.querySelector('#billing-yearly');
const billingLabels = document.querySelectorAll('[data-billing-label]');
const priceElements = document.querySelectorAll('[data-price-monthly]');
const planBonuses = document.querySelectorAll('.plan-card__bonus');

const summaryPlanName = document.querySelector('[data-summary-plan-name]');
const summaryPlanPrice = document.querySelector('[data-summary-plan-price]');
const summaryAddons = document.querySelector('[data-summary-addons]');
const summaryTotalLabel = document.querySelector('[data-summary-total-label]');
const summaryTotalPrice = document.querySelector('[data-summary-total-price]');
const thankYou = document.querySelector('[data-thank-you]');

function parsePrice(priceText) {
  const match = priceText.match(/\$(\d+)/);
  return match ? Number(match[1]) : 0;
}

function renderSummary() {
  const yearly = isYearlyBilling();
  const periodLabel = yearly ? 'Anual' : 'Mensal';
  const periodSuffix = yearly ? '/ano' : '/mês';

  const selectedPlanInput = document.querySelector('.plan-card__input:checked');
  const selectedPlanCard = selectedPlanInput.closest('.plan-card');
  const planName = selectedPlanCard.querySelector('.plan-card__name').textContent;
  const planPriceEl = selectedPlanCard.querySelector('.plan-card__price');
  const planPriceText = yearly
    ? planPriceEl.dataset.priceYearly
    : planPriceEl.dataset.priceMonthly;

  summaryPlanName.textContent = `${planName} (${periodLabel})`;
  summaryPlanPrice.textContent = planPriceText;

  let total = parsePrice(planPriceText);
  summaryAddons.replaceChildren();

  document.querySelectorAll('.addon-card__input:checked').forEach((addonInput) => {
    const addonCard = addonInput.closest('.addon-card');
    const addonName = addonCard.querySelector('.addon-card__name').textContent;
    const addonPriceEl = addonCard.querySelector('.addon-card__price');
    const addonPriceText = yearly
      ? addonPriceEl.dataset.priceYearly
      : addonPriceEl.dataset.priceMonthly;

    total += parsePrice(addonPriceText);

    const row = document.createElement('div');
    row.className = 'summary__addon';

    const nameEl = document.createElement('p');
    nameEl.className = 'summary__addon-name';
    nameEl.textContent = addonName;

    const priceEl = document.createElement('p');
    priceEl.className = 'summary__addon-price';
    priceEl.textContent = addonPriceText;

    row.append(nameEl, priceEl);
    summaryAddons.append(row);
  });

  summaryAddons.hidden = summaryAddons.childElementCount === 0;

  summaryTotalLabel.textContent = yearly
    ? 'Total (por ano)'
    : 'Total (por mês)';

  summaryTotalPrice.textContent = yearly
    ? `$${total}${periodSuffix}`
    : `+$${total}${periodSuffix}`;
}

function isYearlyBilling() {
  return billingToggle.checked;
}

function syncBillingUI() {
  const yearly = isYearlyBilling();

  billingToggle.setAttribute('aria-checked', String(yearly));

  billingLabels.forEach((label) => {
    const isActive = label.dataset.billingLabel === (yearly ? 'yearly' : 'monthly');
    label.classList.toggle('billing-toggle__label--active', isActive);
  });

  priceElements.forEach((el) => {
    el.textContent = yearly ? el.dataset.priceYearly : el.dataset.priceMonthly;
  });

  planBonuses.forEach((bonus) => {
    bonus.hidden = !yearly;
  });
}

function setStep(step) {
  currentStep = Math.min(Math.max(step, 1), TOTAL_STEPS);

  stepItems.forEach((item) => {
    const isActive = Number(item.dataset.step) === currentStep;
    item.classList.toggle('steps__item--active', isActive);

    if (isActive) {
      item.setAttribute('aria-current', 'step');
    } else {
      item.removeAttribute('aria-current');
    }
  });

  panels.forEach((panel) => {
    const isActive = Number(panel.dataset.panel) === currentStep;
    panel.classList.toggle('step--active', isActive);
    panel.hidden = !isActive;
  });

  if (currentStep === 4) {
    renderSummary();
  }
}

function clearFieldError(input) {
  const field = input.closest('.field');
  if (!field) return;

  field.classList.remove('field--error');

  const errorMessage = field.querySelector('.field__error');
  if (errorMessage) {
    errorMessage.textContent = '';
  }

  input.removeAttribute('aria-invalid');
}

function setFieldError(input, msg) {
  const field = input.closest('.field');
  if (!field) return;

  field.classList.add('field--error');

  const errorMessage = field.querySelector('.field__error');
  if (errorMessage) {
    errorMessage.textContent = msg;
  }

  input.setAttribute('aria-invalid', 'true');
}

function validateStep1(form) {
  const name = form.elements.namedItem('name');
  const email = form.elements.namedItem('email');
  const phone = form.elements.namedItem('phone');
  let isValid = true;

  const nameValue = name.value.trim();
  if (nameValue === '') {
    setFieldError(name, 'Este campo é obrigatório');
    isValid = false;
  } else {
    clearFieldError(name);
  }

  const emailValue = email.value.trim();
  if (emailValue === '') {
    setFieldError(email, 'Este campo é obrigatório');
    isValid = false;
  } else if (!EMAIL_REGEX.test(emailValue)) {
    setFieldError(email, 'Informe um e-mail válido');
    isValid = false;
  } else {
    clearFieldError(email);
  }

  const phoneValue = phone.value.trim();
  if (phoneValue === '') {
    setFieldError(phone, 'Este campo é obrigatório');
    isValid = false;
  } else {
    clearFieldError(phone);
  }

  return isValid;
}

formStep1.querySelectorAll('.field__input').forEach((input) => {
  input.addEventListener('input', () => {
    clearFieldError(input);
  });
});

document.querySelectorAll('[data-prev]').forEach((button) => {
  button.addEventListener('click', () => {
    setStep(currentStep - 1);
  });
});

formStep1.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateStep1(formStep1)) return;
  setStep(2);
});

document.querySelector('#form-step-2').addEventListener('submit', (event) => {
  event.preventDefault();
  setStep(3);
});

document.querySelector('#form-step-3').addEventListener('submit', (event) => {
  event.preventDefault();
  setStep(4);
});

document.querySelector('[data-summary-change]').addEventListener('click', () => {
  setStep(2);
});

function showThankYou() {
  panels.forEach((panel) => {
    panel.classList.remove('step--active');
    panel.hidden = true;
  });

  thankYou.hidden = false;

  // Next frame so the browser paints the element before animating in
  requestAnimationFrame(() => {
    thankYou.classList.add('thank-you--visible');
  });
}

document.querySelector('[data-confirm]').addEventListener('click', () => {
  showThankYou();
});

billingToggle.addEventListener('change', syncBillingUI);
syncBillingUI();
