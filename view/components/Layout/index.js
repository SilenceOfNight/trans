import { prop } from '../../utils/styled';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 0 #efefef;
  display: flex;
  flex: 0 0 60px;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
`;

export const HeaderSide = styled.div`
  flex: 0 0 auto;
`;

export const HeaderContent = styled.div`
  flex: 1 1 auto;
  text-align: right;
`;

export const Content = styled.div`
  display: flex;
  justify-content: ${prop('justifyContent', 'flex-start', [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ])};
  align-items: ${prop('alignItem', 'stretch', [
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ])};
  /* align-content: ${prop('alignContent', 'stretch', [
    'flex-start',
    'flex-end , center',
    'space-between',
    'space-around',
    'stretch',
  ])}; */
  color: #666;
  flex: 1 1 auto;
  padding: 20px 40px;
`;

export const Footer = styled.div`
  color: #999;
  flex: 0 0 30px;
  height: 30px;
  line-height: 30px;
  padding: 0 40px;
  text-align: center;
`;
