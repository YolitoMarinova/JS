function solve() {
  let anchors = Array.from(document.querySelectorAll('a'));

  const counters = anchors.map(el => Number(el.nextElementSibling.innerText.split(' ')[1]));

  const container = document.querySelector('#page1 > .middled');
  container.addEventListener('click', function (event) {
    const target = event.target;
    const parent = target.parentElement;
    const isNotTargetAnchor = target.localName !== 'a';
    const isNotParentAnchor = (parent && parent.localName !== 'a');
    if (isNotTargetAnchor && isNotParentAnchor) {
      return;
    }

    const targetAnchor = isNotTargetAnchor ? parent : target;
    const counterIndex = anchors.indexOf(targetAnchor);

    if (counterIndex === -1) { return; }
    counters[counterIndex]++;
    const paragraph = targetAnchor.nextElementSibling;
    paragraph.innerText = `visited ${counters[counterIndex]} times`;
  });
}