import styled from "styled-components";

export const Tickets = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	@media (max-width: 1050px) {
		margin-left: 0px;
		margin-top: 20px;
	}
`;

export const TicketsListItem = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: 10px;
	margin-bottom: 20px;
	height: 160px;
	background: #ffffff;
`;

export const TicketsListItemLeftInfo = styled.div`
	flex: 0 0 200px;
	heighr: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-left: 1px solid #eceff1;
`;

export const LeftInfoImage = styled.div`
	margin-top: 20px;
	width: 120px;
	height: 50px;
	background: url('./images/turkish.png') no-repeat center / contain;
`;

export const LeftInfoButton = styled.button`
	margin-top: 15px;
	color: #ffffff;
	background: #ff6d00;
	border: none;
	border-radius: 5px;
	width: 150px;
	height: 60px;
	outline: none;
	transition: background .3s ease;
	will-change: background;
	& > p {
		margin: 0px;
		margin-top: 5px;
	}
	&:hover{
		background: red;
	}
`;

export const TicketsListItemRightInfo = styled.div`
	flex: 1;
	heighr: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	border-left: 1px solid #eceff1;
`;

export const RightInfoStart = styled.div`
	flex: 1 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RightInfoTransplant = styled.div`
	flex: 1 1;
	position: relative;
`;

export const RightInfoTransplantText = styled.div`
	color: #a2a9ab;
	text-align: center;
	position: relative;
	top: 40px;
	z-index:999;
	font-size: 13px;
`;

export const RightInfoImage = styled.div`
	position: absolute;
	z-index:0;
	top: 30px;
	left: -10px;
	width: 100%;
	height: 70px;
	background: url('./images/airline.png') no-repeat center / contain;

`;

export const RightInfoEnd = styled.div`
	flex: 1 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RightInfoTime = styled.div`
	font-size: 45px;
	margin-top: 20px;
	color: #575757;
`;

export const RightInfoPoint = styled.div`
	font-size: 15px;
	font-weight: bold;
	color: #575757;
	margin-top: 5px;
`;

export const RightInfoData = styled.div`
	font-size: 15px;
	color: #a2a9ab;
	margin-top: 5px;
`;
