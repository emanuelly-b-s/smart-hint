using Microsoft.EntityFrameworkCore;
using smarthint.Model;

public class SettingRepositorie
{
    private readonly SmarthintContext ctx;
    public SettingRepositorie(SmarthintContext ctx)
        => this.ctx = ctx;

    public Setting GetIndividualState(string condition)
    =>  ctx.Settings.Where(s => s.SettingKey == condition)
                    .FirstOrDefault();
}