import React, {Component} from "react";
import "./Login.css";
//import {Link} from "react-router-dom";

class Login extends Component{
    constructor(props){
       super(props);
       this.state = {
           id : "",
           password : ""
       };
    }
    loginhandler = e =>{
        const {name, value} = e.target;
        this.setState({[name] : value });
    };
    loginClickhandler = () =>{

    }
    render(){
        console.log("랜더됨");
        const {isOpen, close} = this.props;
        return(
            <>
            {isOpen ?(
                <div className="login">
                  <div className="loginlogin">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="loginContents" onClick={isOpen}>
                      {/*<img  // 이미지 파일 찾아서 넣으면 될듯
                        className="signinIcon"
                        src="/Images/SignIn/signinIcon.png"
                      />*/}
                      <input
                        name="id"
                        className="loginId"
                        type="text"
                        placeholder="아이디"
                        onChange={this.loginHandler}
                      />
                      <input
                        name="password"
                        className="loginPw"
                        type="password"
                        placeholder="비밀번호"
                        onChange={this.loginHandler}
                      />
                      <div className="loginMid">
                        <div className="autoLogin">아이디/비밀번호 찾기</div>
                      </div>
                      <button className="loginBtn" onClick={this.loginClickHandler}>
                        {" "}
                        로그인{" "}
                      </button>
                      {/*<div className="socialBox">
                        <div className="kakao">
                          <img
                            className="kakaoLogo"
                            src="/Images/SignIn/kakao.png"
                          />
                          <div className="kakaoText">카카오 계정으로 신규가입</div>
                        </div>
                        <div className="facebook">
                          <img
                            className="facebookLogo"
                            src="/Images/SignIn/facebook.png"
                          />
                          <div className="facebookText">
                            페이스북 계정으로 신규가입
                          </div>
                        </div>
                    </div>*/}
                      <div className="loginEnd">
                        <div className="loginLine">
                          회원이 아니신가요? {/*<Link to="/signup">회원가입</Link>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ) : null}
          </>
        );
    }
}
export default Login;