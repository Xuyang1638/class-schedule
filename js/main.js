/*
Program Name:Class Schedule
Author Name: Xuyang1638
Author's school: Wuning No.2 Middle School
Program Version:in index.html and readme file.
*/
function getContent(day) {
    const data = {
        "class19": [
            [
                "语文",
                "数学",
                "物理",
                "微机",
                "音乐",
                "英语",
                "班会",
                "N/A"
            ],
            [
                "语文",
                "数学",
                "英语",
                "地理",
                "阅读",
                "健康",
                "历史",
                "数学"
            ],

            [
                "英语",
                "物理",
                "数学",
                "数学",
                "语文",
                "生物",
                "历史",
                "物理"
            ],

            [
                "语文",
                "英语",
                "政治",
                "数学",
                "地理",
                "美术",
                "体育",
                "英语"
            ],

            [
                "语文",
                "英语",
                "数学",
                "物理",
                "",
                "",
                "",
                "语文"
            ]
        ]
    }

    return data.class19[day-1]
}


function getTitle(day) {
    var days = {
        '1': 'Monday | 星期一',
        '2': 'Tuesday | 星期二',
        '3': 'Wednesday | 星期三',
        '4': 'Thursday | 星期四',
        '5': 'Friday | 星期五',
    };

    return days[day];
}

function getSelect() {
    var select = document.getElementById('daySelect');
    var index = daySelect.selectedIndex; //序号，取当前选中选项的序号
    var val = daySelect.options[index].value;
    return val;
}

function solveUrl(argv_name) {
    //Solve by function GetRequest()
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        console.log(strs)
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    var request = theRequest;
    var argv = request[argv_name];
    return argv;
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function warmTip() {
    mdui.alert("Please check the things of school before, then go to school.", "Warm tips");
    mdui.alert("The things like your : ID Card , Textbook , The homework of last night ...", "Warm tips");
}

function enterPage(day) {
    window.location.href = 'perDay.api.html?day=' + day.toString()
}

function enterTomorrowPage() {
    var d = new Date();
    var day = d.getDay();
    if (day != 7 && day != 6 && day != 5) {
        day = day + 1;
    } else if (day == 5) {
        // Friday
        day = 1
        mdui.alert('今天是周五，我们将为您显示周一的课程。', '提示') 
    } else if (day == 6) {
        day = 1
        mdui.alert('今天是周六, 我们将为您显示周一的课程。', '提示')
    } else if (day == 7) {
        day = 1
        mdui.alert('今天是周日，我们将为您显示周一的课程。', '提示')
    }
    day = day.toString()
    enterPage(day)
}

function enterTodayPage() {
    var d = new Date()
    var day = d.getDay()
    if (day) {
        enterPage(day)
    } else {
        mdui.alert('我们将为您显示周一的课程。', 'Tips')
    };
}

function checkContestRisk() {
    return false
}

function getFormatedClassesData(day) {
    var originData = getContent();
    var classes = [{},
        {
            'name': '',
            'teacher': ''
        },
        {
            'name': '',
            'teacher': ''
        },
        {
            'name': '',
            'teacher': ''
        },
        {
            'name': '',
            'teacher': ''
        },
        {
            'name': '',
            'teacher': ''
        },
        {
            'name': '',
            'teacher': ''
        },
    ];
    for (var i = 0; i == originData.classes_per_day.day.length; i++) {
        classes[day]
    }
}