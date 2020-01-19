import { SignUpButton } from './core.js'
import { EventList } from './core.js'

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

export function getEventList(id)
{
    var ret = []

    var datea = datearray(15012020)
    var a = new EventList('TMJC Open House','TMJC is holding its Open House to give prospective students and their parents a glimpse of our vibrant college life.',datea,id)
    ret.push(a)

    var dateb = datearray(24012020)
    var b = new EventList('Chinese New Year','To celebrate a new year. Students need not',dateb,id)
    ret.push(b)

    var dateb = datearray(5022020)
    var c = new EventList('Matriculation Day','Fist Day of school for J1',dateb,id)
    ret.push(c)

    var dateb = datearray(23032020)
    var d = new EventList('TM Run','TMJC holds a mass marathon at Pasir Park.',dateb,id)
    ret.push(d)

    return ret
}

// Funtions must include

// Date functions

function datearray(num)
{
    var ret = []
    var day = Math.floor(num/1000000)
    ret.push(day)
    num = num-(day*1000000)
    var month = Math.floor(num/10000)
    ret.push(month)
    num = num-(month*10000)
    var year = Math.floor(num)
    ret.push(year)
    return ret
}

function datestring(num)
{
    return ((num[0]*1000000)+(num[1]*10000)+(num[2]))
}
