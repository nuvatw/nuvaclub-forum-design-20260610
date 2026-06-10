const TYPE_LABELS = {
  post: '貼文',
  question: '問問題',
  work: '小作品',
};

const TYPE_META = {
  post: {
    tone: 'story',
    label: '貼文',
    accent: '#65a3ff',
    verb: '分享',
    titlePrefix: ['今日學習筆記', '我把 AI 放進日常', '社群觀察', '課後小心得'],
  },
  question: {
    tone: 'question',
    label: '問問題',
    accent: '#f2c94c',
    verb: '提問',
    titlePrefix: ['想請問大家', '這樣理解對嗎', '卡在這一步', '有沒有更好的做法'],
  },
  work: {
    tone: 'work',
    label: '小作品',
    accent: '#59d39b',
    verb: '展示',
    titlePrefix: ['我的第一個小作品', '用 AI 做的小工具', '今晚的實驗成品', '迷你作品紀錄'],
  },
};

const AUTHORS = [
  'Mia',
  'Hank',
  'Joanne',
  'Kai',
  'Sandy',
  'Yuna',
  'Eason',
  'Iris',
  'Leo',
  'Amber',
  'Chloe',
  'Darren',
];

const TAGS = [
  'AI 入門',
  'Prompt',
  '生活應用',
  '學習紀錄',
  '自動化',
  'Notion',
  '創作',
  '工作流',
  '展示',
  '求助',
];

const BODY_COPY = {
  post: [
    '今天試著把課堂上的提示技巧拿來整理會議摘要，發現只要先寫清楚角色與輸出格式，結果穩定很多。',
    '我原本以為 AI 只適合做文字整理，這週拿來規劃晚餐和行程後，突然覺得它更像一個可以討論的生活助理。',
    '整理了一份自己常用的 prompt 模板，分成蒐集資料、產生初稿、修正語氣三段，感覺比較不容易迷路。',
    '剛完成 Lv1 的練習，最大收穫是不要急著要答案，先把限制條件講清楚會省下很多反覆修改的時間。',
  ],
  question: [
    '如果我想讓 AI 幫我做資料比較，應該先提供完整表格，還是先請它幫我設計欄位比較好？',
    '大家在要求 AI 寫報告時，會先給範例文章，還是直接給評分標準？哪一種比較穩？',
    '我做了一個工作流程，但每次第二步輸出都太發散，有沒有適合新手的收斂寫法？',
    '想請教小作品需要做到多完整才適合分享？只有 prototype 但可以操作，這樣可以嗎？',
  ],
  work: [
    '做了一個可以把零散靈感整理成三欄任務的小頁面，目前支援拖曳、狀態切換和快速備註。',
    '嘗試用 AI 生成練習題，再把題目整理成可點選的測驗卡片，今天先完成了第一版互動。',
    '把每日待辦和反思問題做成一個迷你儀表板，按下完成後會自動產生一句回顧。',
    '做了一個小型 prompt 收納盒，可以依照情境分類，並且一鍵複製常用模板。',
  ],
};

const AGE_HOURS = [
  2, 5, 8, 12, 18, 23, 30, 39, 48, 63, 80, 110, 150, 190, 230, 310, 420, 520,
  620, 760, 980, 1200, 1500, 1900,
];

const state = {
  typeFilter: 'all',
  timeFilter: 'all',
  sortMode: 'newest',
  query: '',
  composerOpen: false,
  composerType: 'post',
  videoOpen: false,
};

function createPosts() {
  return ['post', 'question', 'work'].flatMap((type, typeIndex) =>
    AGE_HOURS.map((age, index) => {
      const meta = TYPE_META[type];
      const idNumber = typeIndex * AGE_HOURS.length + index + 1;
      const title =
        type === 'question'
          ? `${meta.titlePrefix[index % meta.titlePrefix.length]}：${BODY_COPY[type][index % 4].slice(0, 22)}`
          : `${meta.titlePrefix[index % meta.titlePrefix.length]} #${String(index + 1).padStart(2, '0')}`;

      return {
        id: `${type}-${index + 1}`,
        type,
        title,
        body: BODY_COPY[type][index % BODY_COPY[type].length],
        author: AUTHORS[(index + typeIndex * 3) % AUTHORS.length],
        tag: TAGS[(index * 2 + typeIndex) % TAGS.length],
        hearts: ((idNumber * 17 + typeIndex * 23) % 186) + 8,
        replies: ((idNumber * 7 + typeIndex * 5) % 34) + 1,
        views: ((idNumber * 53 + typeIndex * 91) % 1800) + 120,
        ageHours: age,
        accent: meta.accent,
      };
    })
  );
}

const posts = createPosts();

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getAgeText(hours) {
  if (hours < 24) return `${hours} 小時前`;
  if (hours < 24 * 7) return `${Math.floor(hours / 24)} 天前`;
  if (hours < 24 * 30) return `${Math.floor(hours / (24 * 7))} 週前`;
  return `${Math.floor(hours / (24 * 30))} 個月前`;
}

function getPostSummary() {
  return {
    total: posts.length,
    post: posts.filter((item) => item.type === 'post').length,
    question: posts.filter((item) => item.type === 'question').length,
    work: posts.filter((item) => item.type === 'work').length,
  };
}

function getFilteredPosts() {
  const lowerQuery = state.query.trim().toLowerCase();
  const maxHours = {
    day: 24,
    week: 24 * 7,
    month: 24 * 30,
    all: Infinity,
  }[state.timeFilter];

  return posts
    .filter((post) => state.typeFilter === 'all' || post.type === state.typeFilter)
    .filter((post) => post.ageHours <= maxHours)
    .filter((post) => {
      if (!lowerQuery) return true;
      return [post.title, post.body, post.author, post.tag, TYPE_LABELS[post.type]]
        .join(' ')
        .toLowerCase()
        .includes(lowerQuery);
    })
    .sort((a, b) => {
      if (state.sortMode === 'oldest') return b.ageHours - a.ageHours;
      if (state.sortMode === 'hearts-desc') return b.hearts - a.hearts;
      if (state.sortMode === 'hearts-asc') return a.hearts - b.hearts;
      return a.ageHours - b.ageHours;
    });
}

function classForButton(isActive) {
  return isActive ? 'chip chip-active' : 'chip';
}

function renderTypeFilter(type, label, count) {
  return `
    <button class="${classForButton(state.typeFilter === type)}" data-type-filter="${type}">
      <span>${label}</span>
      <strong>${count}</strong>
    </button>
  `;
}

function renderPostCard(post) {
  const meta = TYPE_META[post.type];
  return `
    <article class="post-card" style="--accent:${post.accent}">
      <div class="post-card-top">
        <span class="type-pill">${meta.label}</span>
        <span>${getAgeText(post.ageHours)}</span>
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(post.body)}</p>
      <div class="post-card-footer">
        <div class="author-block">
          <span class="avatar">${escapeHtml(post.author.slice(0, 1))}</span>
          <span>${escapeHtml(post.author)}</span>
          <span class="tag">${escapeHtml(post.tag)}</span>
        </div>
        <div class="metrics" aria-label="文章互動數據">
          <span>♥ ${post.hearts}</span>
          <span>回覆 ${post.replies}</span>
          <span>${post.views} 看過</span>
        </div>
      </div>
    </article>
  `;
}

function renderComposerModal() {
  if (!state.composerOpen) return '';
  const meta = TYPE_META[state.composerType];

  return `
    <div class="modal-layer" data-action="close-composer">
      <section
        class="composer-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="composer-title"
        data-modal-panel
      >
        <div class="modal-header">
          <div>
            <p>想分享點什麼？</p>
            <h2 id="composer-title">選擇你想發布的內容類型</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-composer" aria-label="關閉">
            ×
          </button>
        </div>

        <div class="composer-type-grid" aria-label="選擇文章類型">
          ${['post', 'question', 'work']
            .map(
              (type) => `
                <button
                  class="${state.composerType === type ? 'composer-type active' : 'composer-type'}"
                  type="button"
                  data-composer-type="${type}"
                  style="--accent:${TYPE_META[type].accent}"
                >
                  <span>${TYPE_META[type].label}</span>
                  <small>${TYPE_META[type].verb}</small>
                  ${
                    type === 'work'
                      ? `<span class="work-help" tabindex="0" role="button" aria-label="什麼是小作品？" data-action="open-video">
                          ?
                          <span class="work-tooltip">什麼是小作品？</span>
                        </span>`
                      : ''
                  }
                </button>
              `
            )
            .join('')}
        </div>

        <label class="field-label" for="mock-title">標題</label>
        <input id="mock-title" class="mock-input" value="${escapeHtml(meta.label)}：今天想分享的想法" />

        <label class="field-label" for="mock-body">內容</label>
        <textarea id="mock-body" class="mock-textarea">${escapeHtml(meta.verb)}一段 mock 內容，讓團隊可以預覽不同文章類型在論壇中的視覺與互動感。</textarea>

        <div class="modal-actions">
          <button class="ghost-button" type="button" data-action="close-composer">取消</button>
          <button class="primary-button" type="button" data-action="close-composer">
            模擬發布 ${meta.label}
          </button>
        </div>
      </section>
    </div>
  `;
}

function renderVideoModal() {
  if (!state.videoOpen) return '';

  return `
    <div class="modal-layer video-layer" data-action="close-video">
      <section
        class="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
        data-modal-panel
      >
        <div class="modal-header">
          <div>
            <p>小作品說明</p>
            <h2 id="video-title">什麼是小作品？</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-video" aria-label="關閉影片">
            ×
          </button>
        </div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/aG0ku2xCMgo?autoplay=1"
            title="什麼是小作品？"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  `;
}

function render() {
  const summary = getPostSummary();
  const visiblePosts = getFilteredPosts();

  document.querySelector('#app').innerHTML = `
    <main class="forum-shell">
      <header class="forum-header">
        <nav class="topbar" aria-label="nuvaClub forum navigation">
          <a class="brand" href="/" aria-label="nuvaClub forum mock home">
            <span class="brand-mark">n</span>
            <span>nuvaClub Forum</span>
          </a>
          <div class="topbar-actions">
            <span>Mock sandbox</span>
            <button class="primary-button compact" type="button" data-action="open-composer">
              想分享點什麼？
            </button>
          </div>
        </nav>

        <section class="hero-panel" aria-labelledby="page-title">
          <div class="hero-copy">
            <p class="eyebrow">Forum UI/UX Prototype</p>
            <h1 id="page-title">論壇內容模擬區</h1>
            <p>
              這是一個獨立的 mock data sandbox，模擬 nuvaClub 論壇中貼文、問問題、小作品三種文章型態與篩選排序流程。
            </p>
          </div>
          <div class="hero-stats" aria-label="Mock data 統計">
            <div><strong>${summary.total}</strong><span>全部文章</span></div>
            <div><strong>${summary.post}</strong><span>貼文</span></div>
            <div><strong>${summary.question}</strong><span>問題</span></div>
            <div><strong>${summary.work}</strong><span>小作品</span></div>
          </div>
        </section>
      </header>

      <section class="composer-entry" aria-label="新增文章">
        <button class="composer-trigger" type="button" data-action="open-composer">
          <span class="avatar large">你</span>
          <span>想分享點什麼？</span>
          <strong>開啟</strong>
        </button>
      </section>

      <section class="control-band" aria-label="論壇篩選工具">
        <div class="control-group">
          <span class="control-label">文章類型</span>
          <div class="chips">
            ${renderTypeFilter('all', '全部', summary.total)}
            ${renderTypeFilter('post', '貼文', summary.post)}
            ${renderTypeFilter('question', '問問題', summary.question)}
            ${renderTypeFilter('work', '小作品', summary.work)}
          </div>
        </div>

        <div class="control-row">
          <div class="segmented" aria-label="時間篩選">
            ${[
              ['day', '24 小時'],
              ['week', '一週'],
              ['month', '一個月'],
              ['all', '全部'],
            ]
              .map(
                ([value, label]) => `
                  <button
                    class="${state.timeFilter === value ? 'segment active' : 'segment'}"
                    type="button"
                    data-time-filter="${value}"
                  >
                    ${label}
                  </button>
                `
              )
              .join('')}
          </div>

          <label class="select-wrap">
            <span>排序</span>
            <select id="sort-mode" aria-label="排序方式">
              <option value="newest" ${state.sortMode === 'newest' ? 'selected' : ''}>最新到最舊</option>
              <option value="oldest" ${state.sortMode === 'oldest' ? 'selected' : ''}>最舊到最新</option>
              <option value="hearts-desc" ${state.sortMode === 'hearts-desc' ? 'selected' : ''}>愛心高到低</option>
              <option value="hearts-asc" ${state.sortMode === 'hearts-asc' ? 'selected' : ''}>愛心低到高</option>
            </select>
          </label>

          <label class="search-wrap">
            <span>搜尋</span>
            <input id="search-posts" value="${escapeHtml(state.query)}" placeholder="作者、標籤、標題" />
          </label>
        </div>
      </section>

      <section class="feed-heading" aria-label="文章列表摘要">
        <div>
          <p>目前顯示</p>
          <h2>${visiblePosts.length} 篇文章</h2>
        </div>
        <span>Mock data: 每種類型 24 篇，共 72 篇</span>
      </section>

      <section class="feed-grid" aria-label="論壇文章列表">
        ${visiblePosts.length ? visiblePosts.map(renderPostCard).join('') : '<p class="empty-state">沒有符合條件的文章。</p>'}
      </section>
    </main>

    ${renderComposerModal()}
    ${renderVideoModal()}
  `;
}

function handleClick(event) {
  const actionTarget = event.target.closest('[data-action]');
  const typeFilterTarget = event.target.closest('[data-type-filter]');
  const timeFilterTarget = event.target.closest('[data-time-filter]');
  const composerTypeTarget = event.target.closest('[data-composer-type]');
  const modalPanel = event.target.closest('[data-modal-panel]');

  if (typeFilterTarget) {
    state.typeFilter = typeFilterTarget.dataset.typeFilter;
    render();
    return;
  }

  if (timeFilterTarget) {
    state.timeFilter = timeFilterTarget.dataset.timeFilter;
    render();
    return;
  }

  if (actionTarget?.dataset.action === 'open-video') {
    state.videoOpen = true;
    render();
    return;
  }

  if (composerTypeTarget) {
    state.composerType = composerTypeTarget.dataset.composerType;
    render();
    return;
  }

  if (!actionTarget) return;

  if (modalPanel && actionTarget.classList.contains('modal-layer')) return;

  const action = actionTarget.dataset.action;

  if (action === 'open-composer') state.composerOpen = true;
  if (action === 'close-composer') state.composerOpen = false;
  if (action === 'open-video') state.videoOpen = true;
  if (action === 'close-video') state.videoOpen = false;

  render();
}

function handleInput(event) {
  if (event.target.id === 'sort-mode') {
    state.sortMode = event.target.value;
    render();
  }

  if (event.target.id === 'search-posts') {
    state.query = event.target.value;
    render();
    const input = document.querySelector('#search-posts');
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    state.composerOpen = false;
    state.videoOpen = false;
    render();
  }
});

render();
