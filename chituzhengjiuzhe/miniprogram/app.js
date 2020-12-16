//app.js
var Bmob=require("utils/bmob.js");
var common=require("utils/common.js");
Bmob.initialize("填入AppId", "填入AppSecret");
App({
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true
    })
    //调用API从本地缓存中获取数据
    try {
      var value = wx.getStorageSync('user_openid')
      if (value) {
      }else{
       console.log("执行login")
       wx.login({
         success: function (res) {
           if (res.code) {
             console.log("执行login", res)
           }
         }});
       wx.login({
            success: function(res) {
              console.log('res', res)
              if (res.code) {
                  Bmob.User.requestOpenId(res.code, {
                    success: function(userData) { 
                        wx.getUserInfo({
                            success: function(result) {
                              var userInfo = result.userInfo
                              var nickName = userInfo.nickName
                              var avatarUrl = userInfo.avatarUrl
                              Bmob.User.logIn(nickName, userData.openid, {
                                success: function(user) {
                                  try {
                                      wx.setStorageSync('user_openid', user.get("userData").openid)
                                      wx.setStorageSync('user_id', user.id);
                                      wx.setStorageSync('my_nick', user.get("nickname"))
                                      wx.setStorageSync('my_username', user.get("username"))
                                      wx.setStorageSync('my_avatar', user.get("userPic"))
                                  } catch (e) {    
                                  }
                                  console.log("登录成功");
                                },
                                error: function(user, error) {
                                  if(error.code=="101"){
                                      var user = new Bmob.User();//开始注册用户
                                        user.set("username", nickName);
                                        user.set("password", userData.openid);//因为密码必须提供，但是微信直接登录小程序是没有密码的，所以用openId作为唯一密码    
                                        user.set("nickname", nickName);
                                        user.set("userPic", avatarUrl);
                                        user.set("userData", userData);
                                        user.signUp(null, {
                                            success: function(results) {
                                              console.log("注册成功!");
                                              try {//将返回的3rd_session储存到缓存
                                                wx.setStorageSync('user_openid', results.get("userData").openid)
                                                wx.setStorageSync('user_id', results.id);
                                                wx.setStorageSync('my_username', results.get("username"));
                                                wx.setStorageSync('my_nick', results.get("nickname"));
                                                wx.setStorageSync('my_avatar', results.get("userPic"))
                                                
                                              } catch (e) {    
                                              }
                                            },
                                            error: function(userData, error) {
                                              console.log(error)
                                            }
                                        });
                                  }
                                }
                              });

                              
                            }
                        })                       
                    },
                    error: function(error) {
                        // Show the error message somewhere
                        console.log("Error: " + error.code + " " + error.message);
                    }
                });

              } else {
                console.log('获取用户登录态失败！' + res.errMsg)
              }
            },
            complete:function(e){
              console.log('获取用户登录态失败！' + e)
            }
          });
      }
    } catch (e) {
      console.log("登陆失败")
    }
    wx.checkSession({
      success: function(){
      },
      fail: function(){
        //登录态过期
        wx.login()
      }
    }) 
  },
  onShow:function(){
  },

    getUserInfo: function (cb) {
      var that = this;
      if (this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo;
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        });
      }
    },

  globalData:{
    
  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },
  onError: function(msg) {
    
  }
})
