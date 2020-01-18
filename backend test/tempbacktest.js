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
    return ret

/*
    for(var i = 0; i < z; i++)
    {
        var temp = new SignUpButton('name','descrtiption')
        if (elective)
        {
            // for looop
            // ret[i].addelective()
        }
        ret.push(a)
    }
*/

}
