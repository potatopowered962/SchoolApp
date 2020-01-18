import { SignUpButton } from './core.js'

export function getSignUpButton()
{
    var ret = []
    var a = new SignUpButton('Extra Class','To Make you suffer')
    ret.push(a)
    ret[0].addelective('A','Subject A')
    ret[0].addelective('B','Subject B')
    var b = new SignUpButton('Games','Inter Class Game')
    ret.push(b)
    var c = new SignUpButton('Test Event', 'Test Description')
    ret.push(c)
    return ret
}
