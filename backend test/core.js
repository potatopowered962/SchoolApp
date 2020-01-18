export class EventList
{

    constructor(name, description, date0)
    {
        this.name = name
        this.description = description
        this.date0 = date0
        this.date = date2()
    }

    name()
    {
        return this.name
    }

    description()
    {
        return this.description
    }

    day()
    {
        return this.date0[0]
    }

    month()
    {
        return this.date0[1]
    }

    year()
    {
        return this.date0[2]
    }

    month_w()
    {
        switch(this.date0[1])
        {
            case 1:
                return 'January'
                break;
            case 2:
                return 'February'
                break;
            case 3:
                return 'March'
                break;
            case 4:
                return 'April'
                break;
            case 5:
                return 'May'
                break;
            case 6:
                return 'June'
                break;
            case 7:
                return 'July'
                break;
            case 8:
                return 'August'
                break;
            case 9:
                return 'September'
                break;
            case 10:
                return 'October'
                break;
            case 11:
                return 'November'
                break;
            case 12:
                return 'December'
                break;
            default:
                return null
        }
    }

    date1()   //01-01-2020
    {
        var ret = (date0[0]).toString()
        ret.concat('-',(date0[1]).toString(),'-',(date0[2]).toString())
        return ret
    }

    date2()   //01 January 2020
    {
        var ret = (date0[0]).toString()
        ret.concat(' ',this.month_w(),' ',(date0[2]).toString())
        return ret
    }

}
