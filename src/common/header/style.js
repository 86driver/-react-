import styled from 'styled-components'

import LogoUrl from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${LogoUrl});
  background-size: contain;
`

export const Nav = styled.div`
  margin: 0 auto;
  max-width: 960px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
`
export const NavItemGroup = styled.div`

`

export const NavItem = styled.span`
  display: inline-block;
  font-size: 17px;
  margin: 0 20px;
  color: #333;
  &.home{
    color: #ea6f5a;
  };
  &.Aa{
    color:#969696
  };
  &.login-in{
    color:#969696
  }
`

export const NavSearch = styled.input`
  margin: 0 20px;
  padding: 10px 20px;
  width: 160px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  border-radius: 20px;
  &::placeholder{
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px;
  line-height: 56px;
`

export const Button = styled.div`
  display: inline-block;
  border-radius: 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  line-height: 35px;
  padding: 0 20px;
  &.register{
    color: #ea6f5a;
  };
  &.writing{
    margin-left: 20px;
    color: #fff;
    background: #ea6f5a;
  }
`