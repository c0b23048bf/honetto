// ノベルゲーム部分
let text_frame = document.getElementById("textframe");
let text_box = document.getElementById("textbox");
window.addEventListener("load", function () {
    let story_text = true;
    let stop_event = false;
    let stop_text = false;
    let text_full = true;
    let end_text = false;
    const text_speed = 20;
    let story_idx = 0; // シナリオ分岐のインデックス ここをセーブポイントとする
    let story_text_idx = 0; // シナリオ内の要素のインデックス
    let select_array = []
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");
    let select3 = document.getElementById("select3");
    let select_text = "aa";
    let story = [];
    let story_timeline = []
    const like_rate = 3
    story[0] = [
        "",
        "ある日の深夜",
        "Aは、スマホを片手にベッドに横たわっていた。",
        "A「ふぅ…」",
        "一息つき、いつものように、タイムラインを見て裏垢で日々の出来事を綴る。",
        function() {
            stop_event = true // 下にスクロールさせるために
            $(".textframe").addClass("none"); // テキストを一回非表示
        },
        "何を投稿しようか？",
        function() {
            stop_text = true;
            select_array = [
                [1, "疲れた…。今日の配信、Cがあんだけ目立ってたから余計に疲れたわ。いつも自分中心で、ほんとイライラする。"],
                [2, "彼氏ができたんだけど、ファンには絶対に内緒だよね（笑）"],
                [3, "3 またいらないプレゼント届いた…本当にセンスないし、これどうすればいいの？"]
            ]
            select_text = show_choices(select_array);
        },
    ];
    story_timeline[0] = [
        {
            username: "あかずきん",
            handle: "@aka",
            content: "私はリンゴよりもみかん",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "おおかみ",
            handle: "@wolf",
            content: "今日はいい天気だ",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "しろくま",
            handle: "@polarbear",
            content: "朝の散歩が気持ちいいです",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "あじさい",
            handle: "@hydrangea",
            content: "ガーデニングを楽しんでいます",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "はるひ",
            handle: "@haruki",
            content: "新しい本を読み始めました",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "ラムネ",
            handle: "@ramune",
            content: "夏祭りに行ってきました",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "はるか",
            handle: "@haruka",
            content: "今日は友達と映画を見に行きました",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "つくし",
            handle: "@tsukushi",
            content: "美味しい焼き鳥を食べました",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "りんご",
            handle: "@apple",
            content: "秋の味覚を堪能しています",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "すずめ",
            handle: "@suzume",
            content: "朝の鳥の声を聴いて癒されました",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "ひまわり",
            handle: "@sunflower",
            content: "元気いっぱいです",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "さくら",
            handle: "@sakura",
            content: "春の景色を楽しんでいます",
            icon: "assets/aka_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        }
    ];

    // 愚痴パターン
    story[1] = [
        "A「疲れた…。今日の配信、Cがあんだけ目立ってたから余計に疲れたわ。いつも自分中心で、ほんとイライラする。」",
        "投稿を済まし、満足げにAは眠る",
        function() {
            add_timeline(select_text);
            reload_timeline()
        },
        "翌朝",
        "通知の音でAは目覚める",
        "A「通知うるさいなぁ」",
        "A「えっ、なんでこんなに？」",
        "慌てて通知を開くと、自分の本垢のタイムラインに昨日の裏垢の投稿が表示されていた。",
        "A「やばい！本垢と裏垢を間違えてる！」",
        function() {
            stop_event = true // 下にスクロールさせるために
            $(".textframe").addClass("none"); // テキストを一回非表示
        },
        "どうしよう？",
        function() {
            stop_text = true;
            select_array = [
                [4, "謝罪する"],
                [5, "開き直る"],
                [6, "投稿を削除する"]
            ]
            show_choices(select_array);
        }
    ]

    story_timeline[1] = [
        {
        username: "ぶちかん",
        handle: "@buchi",
        content: "メンバー内の確執がバレるとか最悪だな。アイドルの内部抗争なんて、ファンには絶対見せられないわ。こんな醜態を世に晒すなんて、グループの信用失墜するだろ。",
        icon: "assets/buchi_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        },
        {
        username: "めがね",
        handle: "@megane",
        content: "あの娘はいつも自分のことしか考えてないって噂だったけど、まさかSNSでもそれが露呈するとは。ファンは裏切られた気分だろうな。もう二度と応援したくないわ。",
        icon: "assets/megane_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        },
        {
        username: "ちょこ",
        handle: "@choco",
        content: "メンバー間の軋轢なんて絶対隠しておくべきだろ。こんな醜い姿をさらけ出してどうするつもりだ。ファンからの信頼を完全に失墜させるだけだ。二度と表舞台に出てくるな。",
        icon: "assets/choco_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        }
    ]

    // 彼氏パターン
    story[2] = [
        "A「彼氏ができたんだけど、ファンには絶対に内緒だよね（笑）」",
        "投稿を済まし、満足げにAは眠る",
        function() {
            add_timeline(select_text);
            reload_timeline()
        },
        "翌朝",
        "通知の音でAは目覚める",
        "A「通知うるさいなぁ」",
        "A「えっ、なんでこんなに？」",
        "慌てて通知を開くと、自分の本垢のタイムラインに昨日の裏垢の投稿が表示されていた。",
        "A「やばい！本垢と裏垢を間違えてる！」"
    ]
    story_timeline[2] = [
        {
        username: "まくり",
        handle: "@makuri",
        content: "彼氏なんて絶対にダメだろ。アイドルに彼氏なんて許されるわけないだろ。完全にファンを裏切ってるじゃないか。これで信用なんて一切ないわ。もう応援するのやめる。",
        icon: "assets/buchi_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        },
        {
        username: "てんぷら",
        handle: "@tempura",
        content: "アイドルが秘密の彼氏なんて最悪だな。ファンを馬鹿にしてるしか感じられない。信頼裏切られたくらい腹立つわ。もう絶対にこいつのこと応援しない。",
        icon: "assets/megane_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        },
        {
        username: "でんでん",
        handle: "@denden",
        content: "アイドルに彼氏なんて許されるわけがない。完全にファンを舐めてるだろ。こんなの炎上に等しいぞ。もう二度と表舞台に出てくるなよ。",
        icon: "assets/choco_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        },
        {
        username: "まめお",
        handle: "@mame",
        content: "アイドルに彼氏なんて聞いただけでショックだわ。ファンを裏切るような行為だと思う。信頼関係が完全に損なわれてしまった。もう応援する気になれない。",
        icon: "assets/mame_icon.png",
        replys_num: "null",
        likes_num: "null",
        reposts_num: "null"
        }
    ]

    // ファンの侮辱パターン
    story[3] = [
        "A「またファンからいらないプレゼント届いた…本当にセンスないし、これどうすればいいの？」",
        "投稿を済まし、満足げにAは眠る",
        function() {
            add_timeline(select_text);
            reload_timeline()
        },
        "翌朝",
        "通知の音でAは目覚める",
        "A「通知うるさいなぁ」",
        "A「えっ、なんでこんなに？」",
        "慌てて通知を開くと、自分の本垢のタイムラインに昨日の裏垢の投稿が表示されていた。",
        "A「やばい！本垢と裏垢を間違えてる！」"
    ]
    story_timeline[3] = [
        {
            username: "ひまわり_73",
            handle: "@sunflower_73",
            content: "💢 なんて失礼な発言なんだ？このアイドルはファンの気持ちを全く理解してない！",
            icon: "assets/sunflower_73_icon.png",
            replys_num: "null",
            likes_num: "null",
            reposts_num: "null"
        },
        {
            username: "夜空のシリウス",
            handle: "@night_sirius",
            content: "アイドルとしてあり得ない…ファンの気持ちを踏みにじってる。もう応援できない。",
            icon: "assets/night_sirius_icon.png"
        },
        {
            username: "眠れぬ子猫",
            handle: "@sleepless_kitten",
            content: "こんなこと公に言うなんて信じられない。感謝の気持ちゼロ？",
            icon: "assets/sleepless_kitten_icon.png"
        },
        {
            username: "星屑の涙",
            handle: "@tears_of_stardust",
            content: "こんなこと言っておいて、次の日に『ファンの皆さんいつもありがとう！』とか言ってるんだろうな。偽善者。",
            icon: "assets/tears_of_stardust_icon.png"
        },
        {
            username: "風のウィスパー",
            handle: "@whispering_wind",
            content: "正直言って、ファンにプレゼント贈る気が失せたわ…全然感謝されてないんだもん。",
            icon: "assets/whispering_wind_icon.png"
        }
    ]

    // 謝罪文パターン
    story[4] = [
        "この度は、私の不適切な発言により、ファンの方々をはじめ、関係者の皆様にご心配をおかけしましたことを心よりお詫び申し上げます。",
        "今回のことを教訓に、SNSの利用について改めて考え、今後はより慎重に行動してまいります。",
        "また、ファンの皆様とのコミュニケーションを大切にし、信頼回復に努めてまいります。",
        function() {
            add_timeline("この度は、私の不適切な発言により、ファンの方々をはじめ、関係者の皆様にご心配をおかけしましたことを心よりお詫び申し上げます。")
            add_timeline("今回のことを教訓に、SNSの利用について改めて考え、今後はより慎重に行動してまいります。")
            add_timeline("また、ファンの皆様とのコミュニケーションを大切にし、信頼回復に努めてまいります。")
            reload_timeline()
        }
    ]

    // 開き直りパターン
    story[5] = [
        "私が何を言ったって自由でしょ？いちいち叩かないでほしい。",
        "叩かれることなんて日常茶飯事。気にしない。",
        "私の本音を言っただけ。それが気に入らないなら、アンチしてればいい。",
        function() {
            add_timeline("私が何を言ったって自由でしょ？いちいち叩かないでほしい。")
            add_timeline("叩かれることなんて日常茶飯事。気にしない。")
            add_timeline("私の本音を言っただけ。それが気に入らないなら、アンチしてればいい。")
            reload_timeline()
        }
    ]

    // 投稿消しパターン
    story[6] = [
        "Aは慌てて投稿を消す",
        "しかしすでにスクショを撮られ、拡散され始めていた。",
        function() {
            reload_timeline()
        }
    ]

    create_timeline(story_timeline[story_idx]);

    setInterval(() => { // スクロールができるか
        if ($(".textframe").css("display") === "none"){
            $("body").css("overflow", "");
        }
        else {
            $("body").css("overflow", "hidden");
        }
        console.log(select_text)
      }, 500);

    function main() {
        let text_tmp = split_chars.shift();
        if (!stop_event && typeof story[story_idx][story_text_idx] === "function") {
            story[story_idx][story_text_idx]();
        }
    
        if (!stop_text) {
            if (text_tmp) {
                text_box.innerHTML += text_tmp;
                setTimeout(main, text_speed);
            }
            else {
                text_full = true;
            }
        } 
    }
    
    text_frame.addEventListener("click", function () {
        if (end_text || !text_full) return; // テキストが全て表示されていない場合は何もしない
    
        if (story_text) {
            if (!stop_text) {
                story_text_idx++;
                if (story_text_idx >= story[story_idx].length) {
                    story_text_idx = 0;
                }
            }
            else if (story_idx >= story.length) {
                end_text = true;
                return;
            }
            
            if (typeof story[story_idx][story_text_idx] !== "function") {
                split_chars = story[story_idx][story_text_idx].split("");
            }
    
            text_box.innerHTML = "";
            text_full = false;
            main();
        }
    });
    
    window.addEventListener("scroll", function () { 
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;

        if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1 && stop_event === true) { //ページの一番下に到達したとき
            console.log("ページの一番下に到達しました");
            stop_event = false;
            $(".textframe").removeClass("none");
            text_click()
        }
    });

    // 以下関数
    function show_choices(choices) { // 選択肢を表示とクリックしたかを判定
        $(".select-frame").addClass("show");
        select1.innerHTML = choices[0][1];
        select2.innerHTML = choices[1][1];
        select3.innerHTML = choices[2][1];
        select1.addEventListener("click", function () {
            select_choice(choices[0][0]);
            console.log("これはテスト1" + choices[0][1])
            select_text = choices[0][1];
        });
        select2.addEventListener("click", function () {
            select_choice(choices[1][0], choices[1][1]);
            select_text = choices[1][1];
        });
        select3.addEventListener("click", function () {
            select_choice(choices[2][0]);
            select_text = choices[2][1];
        });
    }
    
    function select_choice(choice_num) {
        $(".select-frame").removeClass("show");
        stop_text = false;
        story_idx = choice_num;
        story_text_idx = 0;
        console.log(choice_num)
        if(typeof story[story_idx][story_text_idx] !== "function"){
            split_chars = story[story_idx][story_text_idx].split("");
        }
        text_box.innerHTML = "";
        main();
    }
    

    function text_click() { // クリックさせたことにする
        $("#textbox").trigger("click");
    }
    
    function reload_timeline() {
        document.querySelector("body").inert = true;
        $("body").fadeOut(1500);
        $("body").fadeIn(1500);
        window.setTimeout(function(){
            create_timeline(story_timeline[story_idx])
            text_click();
            window.setTimeout(function(){
            document.querySelector("body").inert = false;
            }, 1500);
        }, 1500);
    }

    // タイムライン部分
    function create_post(post) { // 投稿の雛形を作成する
        // ここで万単位にしておけば数値の変更を行わなくてもバレないため行わない
        const post_info = document.createElement("div");
        if (post.replys_num == "null") post.replys_num = Math.floor(randfloat(1, 300))
        if (post.likes_num == "null") post.likes_num = Math.floor(randfloat(1, 10)*10) / 10
        if (post.reposts_num == "null") post.reposts_num = Math.floor(randfloat(1, 10)*10) / 10
        post_info.className = "post";
        post_info.innerHTML = `
        <div class="user-info">
            <img src="${post.icon}" width="50" height="50" alt="${post.username}icon">
            <span class=username>${post.username}</span>
            <span class=handle>${post.handle}</span>
        </div>
        <p class="post-content">${post.content}</p>
        <div class="post-icons">
            <div class="posts-icon">
                <span>💬</span>
                <span class="count-num">${post.replys_num}</span>
            </div>
            <div class="posts-icon">
                <input type="checkbox" id="repost-btn-${post.id}" class="checkbox">
                <label for="repost-btn-${post.id}" class="repost">♲</label>
                <span class="count-num">${post.reposts_num}万</span>
            </div>
            <div class="posts-icon">
                <input type="checkbox" id="like-btn-${post.id}" class="checkbox">
                <label for="like-btn-${post.id}" class="heart">❤️</label>
                <span class="count-num">${post.likes_num}万</span>
            </div>
        </div>
        `;
        return post_info;
    }

    function create_timeline(posts) { // タイムラインを作成する
        const postListElement = document.getElementById("postList");
        postListElement.innerHTML = ""; 
        posts.forEach((post, index) => {
            post.id = index;
            const postElement = create_post(post);
            postList.appendChild(postElement);

            if (index < posts.length - 1) {
                const separator = document.createElement("div");
                separator.className = "separator";
                postList.appendChild(separator);
            }
            else {
                const footerflont = document.createElement("div");
                footerflont.className = "footerflont";
                postList.appendChild(footerflont);
            }
        });
    }

    function add_timeline(content) { // 追記day3 timelineがないためバグる
        replys_num = Math.floor(randfloat(1, 300))
        while(true){ // 炎上ツイートのためlikeがrepost数をしたまわるまでループする
            likes_num = Math.ceil((randfloat(1, 10)*10)/10 / like_rate)
            reposts_num = Math.floor(randfloat(1, 10)*10) / 10
            if (likes_num <= reposts_num) break;
        }
        var insert_post = {
            username: "A",
            handle: "@main_account",
            content: content,
            icon: "assets/main_icon.png",
            replys_num: replys_num,
            likes_num: likes_num,
            reposts_num: reposts_num
        };
        story_timeline[story_idx].unshift(insert_post);
    }
    function randfloat(min, max) {
        return Math.random() * (max - min) + min;
    }
});