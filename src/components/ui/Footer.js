import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: "100%",
		zIndex: 1302,
		position: "relative"
	},
	adornment: {
		width: "25em",
		verticalAlign: "bottom",
		[theme.breakpoints.down("md")]: {
			width: "21em"
		},
		[theme.breakpoints.down("xs")]: {
			width: "15em"
		}
	},
	mainContainer: {
		position: "absolute"
	},
	link: {
		color: "white",
		fontFamily: "arial",
		fontSize: "0.75rem",
		fontWeight: "bold",
		textDecoration: "none"
	},
	gridItem: {
		margin: "3em"
	},
	icon: {
		height: "4em",
		width: "4em",
		[theme.breakpoints.down("xs")]: {
			height: "2.5em",
			width: "2.5em"
		}
	},
	socialContainer: {
		position: "absolute",
		marginTop: "-6em",
		right: "1.5em",
		[theme.breakpoints.down("xs")]: {
			right: "0.6em"
		}
	}
}));

export default function Footer(props) {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container justify="center" className={classes.mainContainer}>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								onClick={() => props.setValue(0)}
								component={Link}
								to="/"
								item
								className={classes.link}
							>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(0);
								}}
								component={Link}
								to="/services"
								item
								className={classes.link}
							>
								Services
							</Grid>
							<Grid
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(1);
								}}
								component={Link}
								to="/customsoftware"
								item
								className={classes.link}
							>
								Custom Software Development
							</Grid>
							<Grid
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(2);
								}}
								component={Link}
								to="/mobileapps"
								item
								className={classes.link}
							>
								Mobile App Development
							</Grid>
							<Grid
								onClick={() => {
									props.setValue(1);
									props.setSelectedIndex(3);
								}}
								component={Link}
								to="/websites"
								item
								className={classes.link}
							>
								Website Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								onClick={() => props.setValue(2)}
								component={Link}
								to="/revolution"
								item
								className={classes.link}
							>
								The Revolution
							</Grid>
							<Grid
								onClick={() => props.setValue(2)}
								component={Link}
								to="/revolution"
								item
								className={classes.link}
							>
								Vision
							</Grid>
							<Grid
								onClick={() => props.setValue(2)}
								component={Link}
								to="/revolution"
								item
								className={classes.link}
							>
								Technology
							</Grid>
							<Grid
								onClick={() => props.setValue(2)}
								item
								className={classes.link}
							>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								onClick={() => props.setValue(3)}
								component={Link}
								to="/about"
								item
								className={classes.link}
							>
								About Us
							</Grid>
							<Grid
								onClick={() => props.setValue(3)}
								item
								component={Link}
								to="/about"
								className={classes.link}
							>
								History
							</Grid>
							<Grid
								onClick={() => props.setValue(3)}
								item
								component={Link}
								to="/about"
								className={classes.link}
							>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid
								onClick={() => props.setValue(4)}
								component={Link}
								to="/contact"
								item
								className={classes.link}
							>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>
			<img
				alt="black decorative slash"
				src={footerAdornment}
				className={classes.adornment}
			></img>
			<Grid
				container
				justify="flex-end"
				className={classes.socialContainer}
				spacing={2}
			>
				<Grid
					item
					component={"a"}
					href="https://www.facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Facebook logo" src={facebook} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://www.twitter.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Twitter logo" src={twitter} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://www.instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Instagram logo" src={instagram} className={classes.icon} />
				</Grid>
			</Grid>
		</footer>
	);
}
