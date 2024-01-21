// IPアドレスコピー
document.getElementById('copyButton').addEventListener('click', function() {
    // 一時的なテキストエリア要素を作成
    var textarea = document.createElement('textarea');
    textarea.value = 'aoityou-hp.com';

    // テキストエリアをドキュメントに追加
    document.body.appendChild(textarea);

    // テキストエリア内のテキストを選択
    textarea.select();
    textarea.setSelectionRange(0, 99999); // モバイルデバイス向け

    // 選択したテキストをクリップボードにコピー
    document.execCommand('copy');

    // 一時的なテキストエリアを文書から削除
    document.body.removeChild(textarea);
});

// Discordリンク
document.getElementById('discordButton').addEventListener('click', function() {
    window.location.href = 'https://discord.gg/gzsTdTzQfD';
});