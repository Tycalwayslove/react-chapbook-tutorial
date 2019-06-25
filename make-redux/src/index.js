const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue',
  },
};

function renderApp (appState) {
  renderTitle (appState.title);
  renderContent (appState.content);
}
function renderTitle (title) {
  const titleDOM = document.getElementById ('title');
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}
function renderContent (content) {
  const contentDOM = document.getElementById ('content');
  contentDOM.innerHTML = content.text;
  contentDOM.style.color = content.color;
}
// 根据dispatch 传入的type来改变state的值
function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text;
      break;
    case 'UPDATE_CONTENT_COLOR':
      state.content.color = action.color;
      break;
    default:
      break;
  }
}

//  观察者模式创建createStore 函数
function createStore (state, stateChanger) {
  const listeners = [];
  const subscribe = listener => listeners.push (listener);
  const getState = () => state;

  const dispatch = action => {
    stateChanger (state, action);
    listeners.forEach((listener) => listener())
  };
  return {getState, dispatch,subscribe};
}

const store = new createStore (appState, stateChanger);
store.subscribe(()=> renderApp(store.getState()))
// renderApp (store.getState ());
store.dispatch ({type: 'UPDATE_TITLE_TEXT', text: 'hello world'});
store.dispatch ({type: 'UPDATE_TITLE_TEXT', text: 'hesssllo world'});
// renderApp (store.getState ());
