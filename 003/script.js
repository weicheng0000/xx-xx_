function hideAllContents() {
    const message = document.getElementById('message');
    const gift = document.getElementById('gift');
    const surprise = document.getElementById('surprise');
 message.classList.add('hidden');
    gift.classList.add('hidden');
    surprise.classList.add('hidden');

    gift.style.top = '-100px';
  }

  document.getElementById('messageButton').addEventListener('click', function () {
    hideAllContents();
    const messages = [
      '叉叉 聖誕節快樂啦，很高興能夠認識妳這個朋友，不知道啥時可以真的見到妳，約好要帶我玩北京喔不可以忘記，未來希望妳能夠一直開開心心的，無論開心或難過都有我✋🏻，Merry Christmas 🎄✨',
      'Merry Christmas and Happy New Year! 🎅',
    ];
    const message = document.getElementById('message');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.classList.remove('hidden');
  });

  document.getElementById('giftButton').addEventListener('click', function () {
    hideAllContents();
    const gift = document.getElementById('gift');
    const surprise = document.getElementById('surprise');

    gift.classList.remove('hidden');
    gift.style.top = '-300px';

    setTimeout(() => {
      gift.style.top = 'calc(100vh - 200px)';
    }, 50);

    setTimeout(() => {
      const confirm = window.confirm('點一下簽收你的禮物 🎁');
      if (confirm) {
        gift.classList.add('hidden');
        surprise.classList.remove('hidden');
      }
    }, 2100);
  });