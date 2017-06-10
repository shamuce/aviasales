import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #f2f6f9;
	width: 100%;
	min-height: 600px;
	height: 100%;
`;

export const Content = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AviaLogo = styled.div`
	width: 70px;
	height: 70px;
	background: url('./images/aviasales.png') no-repeat center / cover;
`;

export const ContentItem = styled.div`
	margin-top: 60px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 1000px;
	@media (max-width: 1050px) {
		flex-direction: column;
	}
`