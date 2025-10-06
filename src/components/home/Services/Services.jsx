import ServiceBox from "./components/serviceBox/ServiceBox"

function Services() {
    const services = {
        web: {
            icon: 'layout-template',
            title: 'طراحی و توسعه وبسایت',
            description: 'ما وب‌سایت‌هایی مدرن، سریع و کاربرپسند طراحی می‌کنیم که علاوه بر ظاهر حرفه‌ای، از نظر فنی نیز بهینه باشند. خدمات ما شامل طراحی رابط کاربری (UI)، تجربه کاربری (UX)، توسعه بک‌اند و فرانت‌اند، و همچنین بهینه‌سازی برای موتورهای جستجو (SEO) است. هدف ما ساخت وب‌سایت‌هایی است که هم برند شما را متمایز کند و هم به رشد کسب‌وکارتان کمک کند.'
        },
        mobile: {
            icon: 'smartphone',
            title: 'طراحی و توسعه اپلیکیشن های موبایل',
            description: 'تیم ما اپلیکیشن‌های موبایل را برای اندروید و iOS به صورت کاملاً اختصاصی طراحی و توسعه می‌دهد. این اپلیکیشن‌ها بر اساس نیاز کسب‌وکار شما ساخته می‌شوند و از طراحی رابط کاربری حرفه‌ای، سرعت بالا، امنیت و قابلیت توسعه در آینده برخوردارند. ما از آخرین تکنولوژی‌ها برای ساخت اپلیکیشن‌هایی مقیاس‌پذیر و پایدار استفاده می‌کنیم.'
        },
        systems: {
            icon: 'boxes',
            title: 'سیستم‌های نرم‌افزاری اختصاصی',
            description: 'اگر به نرم‌افزاری نیاز دارید که دقیقاً متناسب با فرایندهای کسب‌وکار شما باشد، ما راهکارهای اختصاصی ارائه می‌کنیم. این سیستم‌ها می‌توانند شامل اتوماسیون اداری، نرم‌افزارهای مدیریت پروژه، سیستم‌های حسابداری یا حتی پلتفرم‌های خاص صنعتی باشند. ما با تحلیل دقیق نیازهایتان، نرم‌افزاری طراحی می‌کنیم که کارایی شما را افزایش دهد و هزینه‌ها را کاهش دهد.'
        },
        update: {
            icon: 'headset',
            title: 'پشتیبانی و به‌روزرسانی نرم‌افزار',
            description: 'توسعه نرم‌افزار پایان کار نیست. ما خدمات پشتیبانی، نگهداری و به‌روزرسانی نرم‌افزار را ارائه می‌دهیم تا مطمئن شوید سیستم‌های شما همیشه به‌روز، ایمن و پایدار باقی می‌مانند. تیم ما به صورت ۲۴/۷ آماده پاسخگویی و ارائه راهکار برای رفع مشکلات احتمالی است.'
        }
    }
    return (
        <div className="flex flex-col gap-12">
            <div className="flex justify-center" >
                <ServiceBox icon={services.web.icon} title={services.web.title} description={services.web.description} state={1} />
            </div>
            <div className=" flex justify-center gap-12">
                <ServiceBox icon={services.systems.icon} title={services.systems.title} description={services.systems.description}  />
                <ServiceBox icon={services.mobile.icon} title={services.mobile.title} description={services.mobile.description} />
            </div>
            <div className="flex justify-center" >
                <ServiceBox icon={services.update.icon} title={services.update.title} description={services.update.description} />
            </div>
        </div>
    )
}

export default Services
