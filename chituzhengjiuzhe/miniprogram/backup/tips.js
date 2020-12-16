Page({
  data: {
    tips:""
  },
  onLoad: function (options) {
    this.tips()
  },
  rnd:function (n, m){
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  },
  tips:function(){
    var tips;
    var page=this;
    var x=page.rnd(1,29);
    console.log(x);
    if (x == 1) {
      tips = "不要过度消费，尤其是贷款消费。"
    } else if (x == 2) {
      tips = "贷款消费属于刚性消费，贷款的金额越多，留下的金额就越小，不到万不得已，最好还是不要用为好。"
    } else if (x == 3) {
      tips = "不要听信谗言。尤其是现在部分国内的投资机构，其中所谓理财师建议的一些投资需要慎重。对于这种机构所提供的的理财产品及其需要慎重。"
    } else if (x == 4) {
      tips = "投资的时候，风险小不一定是好事，而收益低也不一定是坏事。"
    } else if (x == 5) {
      tips = "投资时，如果一个投资项目的风险跟收益比例呈现1：3的比例，即为投资合理。如果说风险跟收益与这个比例有偏差，那么尽可能还是慎重。"
    } else if (x == 6) {
      tips = "在准备理财的时候，可以给自己制定一个表格，自己每天的花销跟收入都要计入其中，无论大小。"
    } else if (x == 7) {
      tips = "心中无数的投资都是盲目的，只有自己手中有笔账，心中有笔账单，那么这投资才算是有数的。"
    } else if (x == 8) {
      tips = "无论是投资什么，都不要忘记了投资自己。会让你对于投资这个事情看得更加清楚，还能够让你在事业之中获得更好的收益。"
    }else if (x == 9) {
      tips = "提升自己是对于理财最有帮助的，提升自己的见识，提升自己的能力，提升自己的知识储备，这些投资是一本万利的。"
    }else if (x == 10) {
      tips = "国家助学贷款：对经济确实困难的学生，经学校和银行等部门的审批，政府给予贴息贷款。贷款利率比市场利率更优惠，这样既可以减轻家庭负担，又可以培养自己的责任意识，如果信用记录好，这还会为大学生日后走进社会积累一定的信用资源。"
    }else if (x == 11) {
      tips = "商业性助学贷款：由家长提出申请，只要符合银行的贷款条件，就可获得贷款。"
    }else if (x == 12) {
      tips = "大学生想学会理财，在平时生活中应注意开源节流。"
    }else if (x == 13) {
      tips = "开源：可以利用课余的时间进行家教、兼职等，这都是学生可以增加收入的有效途径。不仅可以获得额外收入，还能获得很多的社会经验。"
    }else if (x == 14) {
      tips = "节流：遵循一定的消费原则，吃要营养均衡，穿要耐穿耐看，生活消费注重简单实用即可。"
    }else if (x == 15) {
      tips = "合理的理财规划必不可少，具体可以从记账开始，月初规划好当月开支，比如伙食标准、日常用品等。"
    }else if (x == 16) {
      tips = "在经济固定的情况下，规律理财是致富的好法子。可以尝试在经济能力能承受的前提下去理财。"
    }else if (x == 17) {
      tips = "互联网金融现在很火，主要优势是收益高及资金流动方便。"
    }else if (x == 18) {
      tips = "大学生理财主要是学习经验，选择安全的比较重要，体验度高的也必须要的。"
    }else if (x == 19) {
      tips = "大学不缺乏丰富多彩的各类社团和校园的理财活动，例如大学生理财规划设计大赛，这种对学校形成良好的理财氛围提供了一个有效平台。"
    }else if (x == 20) {
      tips = "学校中会有各种投资理财社团的交流，形成了学校中良好的理财氛围。"
    }else if (x == 21) {
      tips = "理财的目的不是单纯的赚钱，而是在积累财富的过程中获得幸福，完成人生各个阶段的目标。"
    }else if (x == 22) {
      tips = "理财时选择体验度高的平台很必要，自己学到了经验，完成人生各个阶段的目标才是最重要的事。"
    }else if (x == 23) {
      tips = "有专家指出，大学生不应该仅仅只有智商，还应该具备一定的财商，养成良好的理财习惯。"
    }else if (x == 24) {
      tips = "除了勤工俭学之外，大学生应该进一步学习投资，这是培养财商的重要途径。"
    }else if (x == 25) {
      tips = "投资并不仅仅是是买股票、买基金或者炒汇，这其实是误解。当前大学生应了解金融知识，懂得利用金融工具。"
    }else if (x == 26) {
      tips = "大学生必须了解投资市场，为今后步入社会后的个人理财积累一定的经验。"
    }else if (x == 27) {
      tips = "培养财商-初级阶段：以培养财务规划的意识为目标，可以从坚持记账和控制消费支出等入手，学会对钱的合理分配和使用。"
    }else if (x == 28) {
      tips = "培养财商-中级阶段：通对理财知识的学习，了解各类理财产品的特点，熟悉各种投资渠道，在一定的范围内进行模拟操作以积累经验。"
    }else if (x == 29) {
      tips = "培养财商-高级阶段：适当进行投资，无论是股票、基金、外汇，都可以从实践中摸索投资门道。"
    }else {
      tips = " "
    }
    console.log(tips)
    page.setData({tips,tips})
  },
})