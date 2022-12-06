import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from "passport-jwt";
import { getUserByUsername } from "../features/auth/services";
import { JwtAccessTokenPayload } from "../features/types";


const opts: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET
};


export default function () {
	passport.use(new JwtStrategy(opts, async (jwt: JwtAccessTokenPayload, done) => {
		const user = await getUserByUsername(jwt.owner);

		done(null, user?.toObject());
	}));
}


export const authMiddleware = passport.authenticate("jwt", { session: false });