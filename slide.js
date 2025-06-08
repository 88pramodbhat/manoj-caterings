const slider = document.getElementById('slider');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;
const slidesCount = slider.children.length;

slider.style.transform = `translateX(0px)`;

function touchStart(index) {
  return function(event) {
    isDragging = true;
    startX = getPositionX(event);
    animationID = requestAnimationFrame(animation);
  };
}

function touchMove(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  const diff = currentPosition - startX;

  // Allow sliding only if swipe is in valid direction:
  // Swipe left: diff negative (move to next slide)
  // Swipe right: diff positive (move to prev slide)

  // For example:
  if (diff < 0 && currentIndex < slidesCount - 1) {
    // swipe left allowed (next slide)
    currentTranslate = prevTranslate + diff;
  } else if (diff > 0 && currentIndex > 0) {
    // swipe right allowed (prev slide)
    currentTranslate = prevTranslate + diff;
  } else {
    // block sliding outside bounds
    currentTranslate = prevTranslate;
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID);
  isDragging = false;

  // Snap to nearest slide depending on how far dragged
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -50 && currentIndex < slidesCount - 1) {
    currentIndex += 1;  // swipe left -> next
  } else if (movedBy > 50 && currentIndex > 0) {
    currentIndex -= 1;  // swipe right -> prev
  }

  setPositionByIndex();
}

function getPositionX(event) {
  return event.type.includes('mouse')
    ? event.pageX
    : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * - (slider.children[0].clientWidth + 10); // 10 = margin-right
  prevTranslate = currentTranslate;
  setSliderPosition();
}

// Add event listeners
slider.addEventListener('touchstart', touchStart());
slider.addEventListener('touchmove', touchMove);
slider.addEventListener('touchend', touchEnd);

slider.addEventListener('mousedown', touchStart());
slider.addEventListener('mousemove', touchMove);
slider.addEventListener('mouseup', touchEnd);
slider.addEventListener('mouseleave', () => { if(isDragging) touchEnd(); });
