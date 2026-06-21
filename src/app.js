const AUTHORS = [
  { name: 'Mina', handle: 'mina-ai', identity: 'Solo' },
  { name: 'Eli', handle: 'eli-builds', identity: 'Studio' },
  { name: 'Yun', handle: 'yun-playbook', identity: 'Explorer' },
  { name: 'Kai', handle: 'kai-lab', identity: 'Vava' },
  { name: 'Nora', handle: 'nora-notes', identity: 'Solo' },
  { name: 'Rae', handle: 'rae-makes', identity: 'Studio' },
  { name: 'Tao', handle: 'tao-flow', identity: 'Explorer' },
  { name: 'Luna', handle: 'luna-loop', identity: 'Vava' },
];

const AGE_HOURS = [
  2, 5, 8, 13, 21, 28, 38, 60, 84, 120, 158, 190, 240, 310, 420, 560, 690, 760,
  900, 1050, 1260, 1500, 1740, 2160,
];

const TAG_GROUPS = {
  post: ['學習紀錄', 'Prompt', '工作流', '筆記', 'AI 生活', '工具'],
  question: ['卡關', '模型選擇', '作業', '方法論', '除錯', '討論'],
  milestone: ['里程碑', '原型', '自動化', '互動頁', '視覺化', 'Demo'],
};

const POST_TITLES = [
  '我把每日學習流程整理成三段式檢查',
  '第一次用 AI 做課前預習，意外省下很多來回',
  '把零散筆記變成可以複習的卡片庫',
  '今天試了反向提問，答案品質差很多',
  '用一個小表格追蹤自己的 prompt 版本',
  '把工作拆成可驗收小步驟之後比較不焦慮',
  '我的 AI 助手設定檔迭代紀錄',
  '分享一個不用插件也能管理素材的方法',
  '從一個失敗 prompt 學到的三件事',
  '把會議摘要變成下一步任務的流程',
  '學習時先問自己要產出什麼，真的比較穩',
  '把常用回覆語氣整理成自己的 tone bank',
  '今天用 AI 做了一份閱讀地圖',
  '用 checklist 避免把問題問得太寬',
  '我怎麼判斷一段回答是不是可以直接用',
  '把錯誤答案留著，反而變成很好的教材',
  '一個週末整理完課程資料的流程',
  '把複雜任務拆成角色與資料兩條線',
  '分享我的 AI 學習日誌格式',
  '用回顧問題把里程碑變得更具體',
  '如何讓同一個 prompt 支援不同情境',
  '我把測驗錯題整理成下一次練習題',
  '今天的模型比較筆記',
  '用小任務保持每天有一點推進',
];

const QUESTION_TITLES = [
  '同一題問三次答案都不同，大家怎麼穩定輸出？',
  '請問要怎麼判斷 prompt 是太短還是資料不足？',
  '做里程碑時卡在資料整理，有推薦的起手式嗎？',
  '如果 AI 一直誤解角色設定，要先改哪裡？',
  '想做一個課程摘要工具，資料格式要怎麼設計？',
  '大家會把 system prompt 寫到多細？',
  '模型回答很漂亮但不精準，怎麼驗證比較快？',
  '做互動頁時，要先畫流程還是先寫內容？',
  '有沒有適合初學者的里程碑發想方法？',
  '想讓 AI 幫我改寫，但怕失去自己的語氣',
  '要怎麼把一份長文章變成可追蹤任務？',
  '不同模型的輸出風格差異要怎麼記錄？',
  '請問里程碑需要做到能上線嗎？',
  '如何避免 AI 幫我補不存在的資料？',
  '大家的 prompt 版本都放在哪裡？',
  '一週只有兩小時，怎麼安排練習最有效？',
  '想整理學習案例，但不知道第一個主題選什麼',
  'AI 協作時，什麼時候該停下來自己判斷？',
  '如何請 AI 幫忙 review 自己的想法？',
  '輸入資料太亂，AI 回答也亂，怎麼救？',
  '問問題前需要先準備哪些背景？',
  '大家會怎麼整理 AI 幫你查到的資料？',
  'Prompt 裡的限制條件是不是越多越好？',
  '想練習拆需求，有沒有推薦題目？',
];

const MILESTONE_TITLES = [
  '里程碑：每日任務自動整理板',
  '里程碑：AI 閱讀卡片產生器',
  '里程碑：課程心得互動牆',
  '里程碑：Prompt 版本比較器',
  '里程碑：會議後續任務拆解器',
  '里程碑：學習進度小儀表板',
  '里程碑：資料清理前後對照頁',
  '里程碑：Notion 摘要小幫手',
  '里程碑：提問品質檢查器',
  '里程碑：影片重點時間軸',
  '里程碑：AI 回答驗證清單',
  '里程碑：個人語氣轉換器',
  '里程碑：錯題反思小卡',
  '里程碑：社群問題分類器',
  '里程碑：課程推薦問答流程',
  '里程碑：靈感抽卡機',
  '里程碑：文件摘要差異檢查',
  '里程碑：學習週報產生器',
  '里程碑：專案資料入口頁',
  '里程碑：簡報大綱整理器',
  '里程碑：客服語氣練習器',
  '里程碑：行動前檢查表',
  '里程碑：概念地圖速寫',
  '里程碑：AI 任務委派面板',
];

const CONTENT_BY_TYPE = {
  post: [
    '這次先限制自己只做一個可驗收成果，反而比一口氣整理全部資料更快完成。',
    '我把問題、資料、輸出格式分開寫，回覆比較少飄掉，也更容易回頭修正。',
    '今天最大的收穫是不要急著問答案，先請 AI 幫我整理判斷標準。',
    '同樣的任務用兩種 prompt 跑了一次，差異比想像中大，留下版本紀錄很有用。',
  ],
  question: [
    '我現在卡在不知道該先補資料還是先改 prompt，想聽聽大家通常怎麼拆。',
    '目前試過把情境寫得更完整，但輸出仍然太發散，想問有沒有更穩的做法。',
    '如果目標是做一個可以分享的小成果，大家會把範圍切到多小？',
    '我想避免答案看起來合理但其實沒有根據，大家會怎麼設計驗證步驟？',
  ],
  milestone: [
    '這是一個可以在一天內完成的里程碑，重點是把想法做成可以被看見的版本。',
    '我把輸入、處理、輸出放在同一頁，讓同學試用時比較知道該怎麼給回饋。',
    '目前先做出核心互動，後面想再補資料匯出和範例模板。',
    '這版刻意保持很小，只驗證一個流程是不是值得繼續做。',
  ],
};

const TYPE_META = {
  post: {
    label: '貼文',
    icon: iconDocument,
    chip: 'type-post',
    dot: 'dot-post',
    composerDesc: '分享心得、紀錄或觀察',
  },
  question: {
    label: '問問題',
    icon: iconQuestion,
    chip: 'type-question',
    dot: 'dot-question',
    composerDesc: '把卡住的地方丟出來',
  },
  milestone: {
    label: '里程碑',
    icon: iconSparkles,
    chip: 'type-milestone',
    dot: 'dot-milestone',
    composerDesc: '記錄 prototype 或練習成果',
  },
};

const TYPE_OPTIONS = [
  ['all', '全部', iconMessage],
  ['post', '貼文', iconDocument],
  ['question', '問問題', iconQuestion],
  ['milestone', '里程碑', iconSparkles],
];

const TIME_OPTIONS = [
  ['24h', '24 小時', 24],
  ['week', '一週', 24 * 7],
  ['month', '一個月', 24 * 30],
  ['all', '全部', null],
];

const SORT_OPTIONS = [
  ['newest', '最新到最舊'],
  ['oldest', '最舊到最新'],
  ['hearts-desc', '愛心高到低'],
  ['hearts-asc', '愛心低到高'],
];

const PREVIEW_TONES = ['cyan', 'amber', 'violet', 'emerald', 'rose'];
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/aG0ku2xCMgo?autoplay=1';

const state = {
  typeFilter: 'all',
  timeFilter: 'all',
  sortMode: 'newest',
  searchTerm: '',
  composerOpen: false,
  composerType: 'post',
  videoOpen: false,
};

const MOCK_FORUM_POSTS = ['post', 'question', 'milestone'].flatMap((type) =>
  getTitlesForType(type).map((_, index) => createPost(type, index))
);

function iconBase(path, className = '') {
  return `<svg class="${className}" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">${path}</svg>`;
}

function iconMessage(className = '') {
  return iconBase(
    '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    className
  );
}

function iconDocument(className = '') {
  return iconBase(
    '<path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className
  );
}

function iconQuestion(className = '') {
  return iconBase(
    '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.7-1.7 2.1-2.3 3v.6M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className
  );
}

function iconSparkles(className = '') {
  return iconBase(
    '<path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    className
  );
}

function iconImage(className = '') {
  return iconBase(
    '<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="m8 13 2.2-2.2 3.2 3.2L15 12l4 5H5l3-4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="8" cy="9" r="1" fill="currentColor"/>',
    className
  );
}

function iconSearch(className = '') {
  return iconBase(
    '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className
  );
}

function iconSort(className = '') {
  return iconBase(
    '<path d="M7 4v16m0 0-3-3m3 3 3-3M17 20V4m0 0-3 3m3-3 3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    className
  );
}

function iconFilter(className = '') {
  return iconBase(
    '<path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className
  );
}

function iconClock(className = '') {
  return iconBase(
    '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className
  );
}

function iconHeart(className = '') {
  return iconBase(
    '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    className
  );
}

function iconChat(className = '') {
  return iconBase(
    '<path d="M21 14a4 4 0 0 1-4 4H9l-6 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    className
  );
}

function iconPlay(className = '') {
  return iconBase(
    '<path d="m9 7 8 5-8 5V7Z" fill="currentColor"/>',
    className
  );
}

function iconX(className = '') {
  return iconBase(
    '<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    className
  );
}

function getTitlesForType(type) {
  if (type === 'question') return QUESTION_TITLES;
  if (type === 'milestone') return MILESTONE_TITLES;
  return POST_TITLES;
}

function createPost(type, index) {
  const author = AUTHORS[(index + type.length) % AUTHORS.length];
  const typeSeed = type === 'post' ? 3 : type === 'question' ? 7 : 11;
  return {
    id: `${type}-${String(index + 1).padStart(2, '0')}`,
    type,
    title: getTitlesForType(type)[index],
    content: CONTENT_BY_TYPE[type][index % CONTENT_BY_TYPE[type].length],
    tags: [
      TAG_GROUPS[type][index % TAG_GROUPS[type].length],
      TAG_GROUPS[type][(index + 2) % TAG_GROUPS[type].length],
    ],
    author,
    ageHours: AGE_HOURS[index],
    hearts: 18 + ((index * 17 + typeSeed * 13) % 214),
    comments: 2 + ((index * 5 + typeSeed) % 36),
    views: 120 + ((index * 97 + typeSeed * 31) % 2200),
    previewTone: type === 'milestone' ? PREVIEW_TONES[index % PREVIEW_TONES.length] : undefined,
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatRelativeTime(ageHours) {
  if (ageHours < 24) return `${ageHours} 小時前`;
  const diffDays = Math.floor(ageHours / 24);
  if (diffDays < 7) return `${diffDays} 天前`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffDays < 30) return `${diffWeeks} 週前`;
  return `${Math.floor(diffDays / 30)} 個月前`;
}

function getTypeCount(type) {
  return MOCK_FORUM_POSTS.filter((post) => post.type === type).length;
}

function getTimeWindowHours() {
  return TIME_OPTIONS.find(([value]) => value === state.timeFilter)?.[2];
}

function getFilteredPosts() {
  const normalizedQuery = state.searchTerm.trim().toLowerCase();
  const windowHours = getTimeWindowHours();
  const filtered = MOCK_FORUM_POSTS.filter((post) => {
    if (state.typeFilter !== 'all' && post.type !== state.typeFilter) return false;
    if (windowHours && post.ageHours > windowHours) return false;
    if (!normalizedQuery) return true;
    return [post.title, post.content, post.author.name, post.author.handle, ...post.tags]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery);
  });

  return [...filtered].sort((a, b) => {
    if (state.sortMode === 'newest') return a.ageHours - b.ageHours;
    if (state.sortMode === 'oldest') return b.ageHours - a.ageHours;
    if (state.sortMode === 'hearts-desc') return b.hearts - a.hearts;
    return a.hearts - b.hearts;
  });
}

function renderAvatar(name) {
  return `<div class="avatar" aria-hidden="true">${escapeHtml(name.charAt(0).toUpperCase())}</div>`;
}

function renderComposerPrompt() {
  return `
    <div class="composer-prompt">
      <div class="composer-row">
        ${renderAvatar('nuva')}
        <button class="composer-button" type="button" data-action="open-composer">
          <span>想分享點什麼？</span>
        </button>
        <button class="round-button" type="button" data-action="open-composer" aria-label="分享里程碑截圖">
          ${iconImage('icon-md')}
        </button>
      </div>
    </div>
  `;
}

function renderFilterPill({ selected, action, value, content }) {
  return `
    <button class="${selected ? 'filter-pill selected' : 'filter-pill'}" type="button" data-action="${action}" data-value="${value}">
      ${content}
    </button>
  `;
}

function renderToolbar() {
  return `
    <div class="feed-toolbar">
      <div class="toolbar-top">
        <label class="search-field">
          ${iconSearch('field-icon')}
          <input
            type="search"
            id="search-posts"
            value="${escapeHtml(state.searchTerm)}"
            placeholder="搜尋 mock 貼文"
          />
        </label>

        <label class="sort-field">
          ${iconSort('icon-sm')}
          <span>排序</span>
          <select id="sort-mode">
            ${SORT_OPTIONS.map(
              ([value, label]) =>
                `<option value="${value}" ${state.sortMode === value ? 'selected' : ''}>${label}</option>`
            ).join('')}
          </select>
        </label>
      </div>

      <div class="filter-section">
        <div class="filter-label">
          ${iconFilter('icon-sm')}
          類型
        </div>
        <div class="filter-scroll">
          ${TYPE_OPTIONS.map(([value, label, icon]) => {
            const count = value === 'all' ? '' : `<span>${getTypeCount(value)}</span>`;
            return renderFilterPill({
              selected: state.typeFilter === value,
              action: 'type-filter',
              value,
              content: `${icon('icon-sm')}<span>${label}</span>${count}`,
            });
          }).join('')}
        </div>
      </div>

      <div class="filter-section">
        <div class="filter-label">
          ${iconClock('icon-sm')}
          時間
        </div>
        <div class="filter-scroll">
          ${TIME_OPTIONS.map(([value, label]) =>
            renderFilterPill({
              selected: state.timeFilter === value,
              action: 'time-filter',
              value,
              content: escapeHtml(label),
            })
          ).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderMilestonePreview(post) {
  if (post.type !== 'milestone') return '';
  return `
    <div class="milestone-preview tone-${post.previewTone}">
      <div class="preview-chip">
        <span>Prototype preview</span>
        <span>${iconPlay('icon-xs')}Demo</span>
      </div>
    </div>
  `;
}

function renderPostCard(post) {
  const meta = TYPE_META[post.type];
  return `
    <article class="post-card">
      <div class="post-avatar-column">
        ${renderAvatar(post.author.name)}
        <div class="avatar-line"></div>
      </div>

      <div class="post-body">
        <div class="post-meta">
          <span class="author-name">${escapeHtml(post.author.name)}</span>
          <span class="identity-dot ${meta.dot}"></span>
          <span>@${escapeHtml(post.author.handle)}</span>
          <span class="muted-dot">·</span>
          <span>${formatRelativeTime(post.ageHours)}</span>
          <span class="muted-dot">·</span>
          <span>${escapeHtml(post.author.identity)}</span>
        </div>

        <div class="tag-row">
          <span class="type-chip ${meta.chip}">
            ${meta.icon('icon-xs')}
            ${meta.label}
          </span>
          ${post.tags
            .map((tag) => `<span class="tag-chip">#${escapeHtml(tag)}</span>`)
            .join('')}
        </div>

        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.content)}</p>

        ${renderMilestonePreview(post)}

        <div class="action-row">
          <button type="button" aria-label="${escapeHtml(post.title)} 的愛心數 ${post.hearts}">
            ${iconHeart('icon-sm')}
            <span>${post.hearts}</span>
          </button>
          <button type="button" aria-label="${escapeHtml(post.title)} 的留言數 ${post.comments}">
            ${iconChat('icon-sm')}
            <span>${post.comments}</span>
          </button>
          <span>${post.views.toLocaleString()} views</span>
        </div>
      </div>
    </article>
  `;
}

function renderSidebar() {
  const topMilestones = MOCK_FORUM_POSTS.filter((post) => post.type === 'milestone')
    .sort((a, b) => b.hearts - a.hearts)
    .slice(0, 3);
  const tagCounts = MOCK_FORUM_POSTS.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1;
    });
    return acc;
  }, {});
  const trendingTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return `
    <aside class="sidebar">
      <section class="side-card">
        <h3><span class="primary-mark">#</span>熱門標籤</h3>
        <div class="side-tags">
          ${trendingTags
            .map(
              ([tag, count]) => `
                <span class="side-tag">
                  ${escapeHtml(tag)}
                  <span>${count}</span>
                </span>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="side-card">
        <h3>${iconSparkles('icon-sm text-emerald')}里程碑焦點</h3>
        <div class="top-milestones">
          ${topMilestones
            .map(
              (post) => `
                <div class="top-milestone">
                  <p>${escapeHtml(post.title)}</p>
                  <div>
                    <span>${iconHeart('icon-xs')}${post.hearts}</span>
                    <span>${formatRelativeTime(post.ageHours)}</span>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="side-card callout">
        <h3>Mock 入口</h3>
        <p>這頁只使用前端 mock data；原本論壇頁與發文頁沒有接到這組資料。</p>
        <a href="/" aria-label="回到正式論壇">回到正式論壇 <span aria-hidden="true">→</span></a>
      </section>
    </aside>
  `;
}

function renderComposerModal() {
  if (!state.composerOpen) return '';
  const selected = TYPE_META[state.composerType];
  const placeholder =
    state.composerType === 'milestone'
      ? '貼上連結、截圖說明，或描述這個里程碑想驗證什麼。'
      : state.composerType === 'question'
        ? '描述你卡住的地方、試過什麼、希望大家幫你看哪一段。'
        : '寫下你的觀察、流程、心得或想分享的素材。';

  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="mock-composer-title" data-action="close-composer">
      <section class="composer-modal" data-modal-panel>
        <div class="modal-header">
          <div>
            <h2 id="mock-composer-title">想分享點什麼？</h2>
            <p>選一種形式開始。</p>
          </div>
          <button class="round-button" type="button" data-action="close-composer" aria-label="關閉">
            ${iconX('icon-sm')}
          </button>
        </div>

        <div class="modal-content">
          <div class="composer-type-grid">
            ${['post', 'question', 'milestone']
              .map((type) => {
                const meta = TYPE_META[type];
                const selectedClass = state.composerType === type ? ' selected' : '';
                const milestoneHelp =
                  type === 'milestone'
                    ? `<div class="milestone-help-wrap">
                        <button class="milestone-help-button" type="button" data-action="open-video" aria-label="什麼是里程碑？">
                          ${iconQuestion('icon-sm')}
                          <span>什麼是里程碑？</span>
                        </button>
                      </div>`
                    : '';
                return `
                  <div class="composer-type-wrap">
                    <button class="composer-type${selectedClass}" type="button" data-action="composer-type" data-value="${type}">
                      <span class="type-icon">${meta.icon('icon-sm')}</span>
                      <span>
                        <strong>${meta.label}</strong>
                        <small>${meta.composerDesc}</small>
                      </span>
                    </button>
                    ${milestoneHelp}
                  </div>
                `;
              })
              .join('')}
          </div>

          <div class="draft-box">
            <div class="draft-meta">
              <span class="type-chip ${selected.chip}">${selected.label}</span>
              <span>mock draft</span>
            </div>
            <input aria-label="${selected.label}標題" placeholder="${selected.label}標題" />
            <textarea aria-label="${selected.label}內容" rows="5" placeholder="${placeholder}"></textarea>
            <div class="draft-actions">
              <button class="publish-button" type="button" data-action="close-composer">
                ${iconMessage('icon-sm')}
                發布 mock ${selected.label}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderVideoModal() {
  if (!state.videoOpen) return '';
  return `
    <div class="modal-backdrop video" role="dialog" aria-modal="true" aria-labelledby="milestone-video-title" data-action="close-video">
      <section class="video-modal" data-modal-panel>
        <div class="modal-header">
          <div>
            <h2 id="milestone-video-title">什麼是里程碑？</h2>
            <p>nuva 里程碑說明影片</p>
          </div>
          <button class="round-button" type="button" data-action="close-video" aria-label="關閉影片">
            ${iconX('icon-sm')}
          </button>
        </div>
        <div class="video-frame">
          <iframe
            src="${YOUTUBE_EMBED_URL}"
            title="什麼是里程碑？"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  `;
}

function render() {
  const filteredPosts = getFilteredPosts();
  document.querySelector('#app').innerHTML = `
    <div class="page">
      <div class="container">
        <header class="mock-header">
          <div>
            <a href="/" class="back-link">← 回論壇</a>
            <h1>論壇 Mock Sandbox</h1>
            <p>${MOCK_FORUM_POSTS.length} 篇 mock 文章，三種文章類型各 24 篇。</p>
          </div>
          <div class="status-pill">
            <span></span>
            獨立 mock route
          </div>
        </header>

        <div class="forum-layout">
          <div class="feed-column">
            <div class="forum-panel">
              ${renderComposerPrompt()}
              ${renderToolbar()}
              <main>
                <div class="feed-count">顯示 ${filteredPosts.length} 篇</div>
                ${
                  filteredPosts.length
                    ? `<div class="post-list">${filteredPosts.map(renderPostCard).join('')}</div>`
                    : '<div class="empty-state"><p>沒有符合條件的 mock 文章</p></div>'
                }
              </main>
            </div>
          </div>
          <div class="sidebar-column">
            ${renderSidebar()}
          </div>
        </div>
      </div>
    </div>
    ${renderComposerModal()}
    ${renderVideoModal()}
  `;
}

function handleClick(event) {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  if (target.closest('[data-modal-panel]') && target.classList.contains('modal-backdrop')) return;

  const action = target.dataset.action;

  if (action === 'type-filter') state.typeFilter = target.dataset.value;
  if (action === 'time-filter') state.timeFilter = target.dataset.value;
  if (action === 'composer-type') state.composerType = target.dataset.value;
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
    state.searchTerm = event.target.value;
    render();
    const input = document.querySelector('#search-posts');
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  state.composerOpen = false;
  state.videoOpen = false;
  render();
});

render();
