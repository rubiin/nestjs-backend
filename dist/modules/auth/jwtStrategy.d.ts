import { UserRepository } from './user.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserRepository);
    validate(payload: any): Promise<import("./user.entity").User>;
}
export {};
