
// 新規登録画面を表示
function showRegister() {
    document.getElementById('login-container').classList.remove('active');
    document.getElementById('register-container').classList.add('active');
    document.getElementById('login-icon').classList.add('active');
}

// ログイン画面を表示
function showLogin() {
    document.getElementById('register-container').classList.remove('active');
    document.getElementById('login-container').classList.add('active');
}

// ログイン後のウェルカム画面を表示
function showWelcome(acountname) {
    document.getElementById('login-container').classList.remove('active');
    document.getElementById('welcome-container').classList.add('active');
    document.getElementById('acountname').textContent = acountname;
}

// 新規登録フォームの送信
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('./newregi.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
      .then(data => alert(data))
      .catch(error => console.error('Error:', error));
});

// ログインフォームの送信
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('./login.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              showWelcome(data.acountname);
          } else {
              alert(data.message);
          }
      })
      .catch(error => console.error('Error:', error));
});

// ログアウト処理
function logout() {
    fetch('./logout.php').then(() => {
        document.getElementById('welcome-container').classList.remove('active');
        showLogin();
    });
}