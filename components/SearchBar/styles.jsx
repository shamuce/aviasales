import styled from "styled-components";

export const Bar = styled.div`
	flex: 0 0 242px;
	height: 260px;
	background: #ffffff;
	border-radius: 10px;
	@media (max-width: 1050px) {
		width: 242px;
		flex: none;
	}
`;

export const Label = styled.h1`
	font-size: 12px;
	text-transform: uppercase;
	color: #575757;
	margin: 20px 20px;
`;

export const CheckBoxList = styled.div`
	display:flex;
	flex-direction: column;
`;



export const CheckBox = styled.label`;
	transition: background .3s ease;
	user-select: none;
	position: relative;
	padding: 10px 40px;
	span {
	    width: 15px;
	    height: 15px;
	    cursor: pointer;
	    position: absolute;
	    top: 10px;
	    left: 20px;
	   
	    border: 1px solid #3e9ce9;
	    border-radius: 4px;
	    
	    &:after {
	      content: '';
	      width: 9px;
	      height: 5px;
	      position: absolute;
	      top: 1px;
	      left: 2px;
	      border: 3px solid #358cd3;
	      border-top: none;
	      border-right: none;
	      background: transparent;
	      opacity: 0;
	      transform: rotate(-45deg);
	    }
	  }

	&:hover span::after {
	    opacity: 0.5;
	}

	&:hover{
		background: #f1fcff
	}

	input[type=checkbox] {
	    visibility: hidden;
	    &:checked + span:after {
	      opacity: 1;
	    }
	}    
`;