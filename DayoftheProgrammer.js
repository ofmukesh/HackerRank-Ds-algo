
def dayOfProgrammer(year):
    if year < 1918:
        ftext = "13.09.{}" if year & 3 else "12.09.{}"
    elif year > 1918:
        ftext = "13.09.{}" if (year & 3) or (year % 400 and not year % 100) else "12.09.{}"
    else:
        ftext = "26.09.{}"
    return ftext.format(year)
