import SignUpButton from 'ConvolverNode.js'

export function getSignUpButton()
{
    var ret = []
    ret.push(new SignUpButton('Extra Class','To Make you suffer'))
    ret[0].addelective('A','Subject A')
    ret[0].addelective('B','Subject B')
    ret.push(new SignUpButton('Games','Inter Class Game'))
    return ret
}