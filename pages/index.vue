<script setup lang="ts">
import { useLocale } from "~/stores/useLocale";
import type { TimelineItem } from "@nuxt/ui";

const locale = useLocale();

useHead({
	title: "Office | HR | Country Manager - Nuky Irhamna",
});

const translations = {
	en: [
		{
			section: 1,
			hey: "Hey, I'm Nuky Irhamna",
			desc: "Versatile country manager and business strategist with a proven track record in HR, finance, digital marketing, and media relations. From winning legal disputes and transforming financial losses into profitable operations, to leading emergency infrastructure projects during the pandemic, I bring deep, real-world insight to every role.",
			button: "Hiring or Collaboration?",
			available: "Available For",
			new_project: "New Projects & Oppourtunity",
		},
		// Section 2
		{
			section: 2,
			caption:
				"The most meaningful progress comes not from titles, but from the impact we leave behind.",
		},
		// Section 3
		{
			section: 3,
			title: "career-overview",
			caption_1: "my-work-experience",
			caption_2: "my-education",
			caption_3: "core-competencies",
			caption_4: "key-achievements",
			education: "Accounting Major | Economic",
			competencies_1: "Strategic Talent Acquisition & Executive Search",
			competencies_2: "Financial Operations, Tax Strategy & Dispute Resolution",
			competencies_3: "Crisis Project Management & Infrastructure Delivery",
			competencies_4: "Legal Structuring & Organizational Development",
			competencies_5: "Digital & Traditional Marketing Strategy",
			competencies_6: "High-Stakes Negotiation & Stakeholder Engagement",
			competencies_7: "HRIS Implementation & Workforce Optimization",
			competencies_8: "Business Transformation & Performance Turnaround",
			competencies_9: "Public & Media Relations Campaigns",
			competencies_10:
				"Cross-Industry Leadership in Startup & Corporate Environments",
			achievements_1:
				"Directed national crisis response as team lead for COVID-19 emergency hospital construction in Galang (Batam) and Simprug (Jakarta), delivering infrastructure under extreme urgency – Wika Modular Division (2020)",
			achievements_2:
				"Secured tax exemption on unendorsed goods imports from Batam to Jakarta, minimizing loss and resolving regulatory conflict – Wika Modular Division (2020)",
			achievements_3:
				"Won a decade-long tax audit dispute through comprehensive financial restructuring, improving compliance and streamlining administrative systems – CLS Argos Indonesia (2014–2018)",
			achievements_4:
				"Established full legal and physical presence for a new entity, transitioning operations from virtual office to a formal corporate setup – Cohn & Wolfe XPR (2012–2014)",
			achievements_5:
				"Reversed financial performance, transforming negative profit-and-loss into sustained profitability through operational efficiencies – Cohn & Wolfe XPR (2012–2014)",
		},
		// Section 4
		{
			section: 4,
			title: "about-me",
			p_1: "Versatile country manager and business strategist with a proven track record in HR, finance, digital marketing, and media relations.",
			p_2: "From winning legal disputes and transforming financial losses into profitable operations, to leading emergency infrastructure projects during the pandemic, I bring deep, real-world insight to every role.",
			p_3: "My practical experience, shaped across startups, multinationals, and high-pressure environments, has equipped me with sharper accounting and tax acumen than any traditional education.",
			p_4: "Resilient, collaborative, and solutions-focused, I thrive on driving organizational growth and creating impact through bold strategy and decisive leadership.",
			contact: "Contact Me?",
			msg: "Message Me Here:",
		},
	],
	id: [
		{
			section: 1,
			hey: "Hai, Saya Nuky Irhamna",
			desc: "Country manager yang serba bisa dan ahli strategi bisnis dengan rekam jejak yang terbukti di bidang SDM, keuangan, pemasaran digital, dan hubungan media. Mulai dari memenangkan sengketa hukum dan mengubah kerugian keuangan menjadi operasi yang menguntungkan, hingga memimpin proyek infrastruktur darurat selama pandemi, saya membawa wawasan mendalam dan praktis ke setiap peran yang saya jalankan.",
			button: "Kerjasama dengan saya?",
			available: "Terbuka untuk",
			new_project: "Proyek & peluang kerjasama",
		},
		// Section 2
		{
			section: 2,
			caption:
				"Kesuksesan yang paling bermakna tidak datang dari gelar, tapi dari dampak yang kita tinggalkan.",
		},
		// Section 3
		{
			section: 3,
			title: "ringkasan-karir",
			caption_1: "pengalaman-kerja-saya",
			caption_2: "pendidikan-saya",
			caption_3: "kompetensi-dasar",
			caption_4: "pencapaian-terbaik",
			education: "Jurusan Akuntansi | Ekonomi",
			competencies_1: "Perekrutan Talenta Strategis & Pencarian Eksekutif",
			competencies_2:
				"Operasi Keuangan, Strategi Pajak & Penyelesaian Sengketa",
			competencies_3: "Manajemen Proyek Krisis & Pengiriman Infrastruktur",
			competencies_4: "Struktur Hukum & Pengembangan Organisasi",
			competencies_5: "Strategi Pemasaran Digital & Tradisional",
			competencies_6:
				"Negosiasi Berisiko Tinggi & Keterlibatan Pemangku Kepentingan",
			competencies_7: "Implementasi HRIS & Optimalisasi Tenaga Kerja",
			competencies_8: "Transformasi Bisnis & Pemulihan Kinerja",
			competencies_9: "Kampanye Hubungan Masyarakat & Media",
			competencies_10:
				"Kepemimpinan Lintas Industri di Lingkungan Startup & Korporat",
			achievements_1:
				"Memimpin respons krisis nasional sebagai pemimpin tim dalam pembangunan rumah sakit darurat COVID-19 di Galang (Batam) dan Simprug (Jakarta), menyelesaikan infrastruktur dalam kondisi darurat yang ekstrem – Divisi Modular Wika (2020)",
			achievements_2:
				"Mendapatkan pembebasan pajak atas impor barang yang tidak disetujui dari Batam ke Jakarta, meminimalkan kerugian dan menyelesaikan konflik regulasi – Divisi Modular Wika (2020)",
			achievements_3:
				"Menang dalam sengketa audit pajak selama satu dekade melalui restrukturisasi keuangan komprehensif, meningkatkan kepatuhan, dan menyederhanakan sistem administratif – CLS Argos Indonesia (2014–2018)",
			achievements_4:
				"Mendirikan kehadiran hukum dan fisik penuh untuk entitas baru, mengalihkan operasi dari kantor virtual ke struktur korporasi formal – Cohn & Wolfe XPR (2012–2014)",
			achievements_5:
				"Membalikkan kinerja keuangan, mengubah kerugian menjadi keuntungan berkelanjutan melalui efisiensi operasional – Cohn & Wolfe XPR (2012–2014)",
		},
		// Section 4
		{
			section: 4,
			title: "tentang-saya",
			p_1: "Country manager yang serba bisa dan ahli strategi bisnis dengan rekam jejak yang terbukti di bidang SDM, keuangan, pemasaran digital, dan hubungan media.",
			p_2: "Dari memenangkan sengketa hukum dan mengubah kerugian keuangan menjadi operasi yang menguntungkan, hingga memimpin proyek infrastruktur darurat selama pandemi, saya membawa wawasan praktis yang mendalam ke setiap peran.  ",
			p_3: "Pengalaman praktis saya, yang terbentuk di startup, perusahaan multinasional, dan lingkungan bertekanan tinggi, telah membekali saya dengan keahlian akuntansi dan perpajakan yang lebih tajam daripada pendidikan tradisional.",
			p_4: "Tangguh, kolaboratif, dan berfokus pada solusi, saya berkembang dalam mendorong pertumbuhan organisasi dan menciptakan dampak melalui strategi berani dan kepemimpinan yang tegas.",
			contact: "Hubungi Saya?",
			msg: "Hubungi Saya Disini:",
		},
	],
};

const items = [
	{
		date: "Aug 2023 - Present",
		title: "Country Manager",
		description: "PT Sportshero Indonesia",
		icon: "i-lucide-volleyball",
		url: "https://asx.sportshero.live",
	},
	{
		date: "2021 - 2024",
		title: "Founder & Director ",
		description: "MSS HRPay",
		icon: "i-lucide-hand-coins",
		url: "https://msshrpay-mockup.vercel.app",
	},

	{
		date: "2022 - 2023",
		title: "HR Recruiter, Consultant",
		description: "PT Bumi Intan Grha",
		icon: "i-lucide-globe",
		url: "https://bumiintangrha.com",
	},
	{
		date: "2022 - 2023",
		title: "HR Recruiter, Consultant",
		description: "PT Askara Lanskap Indonesia",
		icon: "i-lucide-align-vertical-justify-end",
		url: "https://www.instagram.com/askara_landscape/",
	},
	{
		date: "2022 - 2023",
		title: "HR Recruiter, Consultant",
		description: "Hanara Nurseries",
		icon: "i-lucide-cannabis",
		url: "https://www.instagram.com/hanara.nurseries/",
	},
	{
		date: "2022 - 2023",
		title: "HR Recruiter, Consultant",
		description: "CV Costus Garden",
		icon: "i-lucide-leaf",
		url: "https://www.costusgarden.com/",
	},
	{
		date: "2020 - 2022",
		title: "Marketing Manager",
		description: "PT. Wika Modular Division",
		url: "https://www.wikagedung.co.id/lini-bisnis/modular?q=lingkup-usaha",
	},
	{
		date: "2018 - 2020",
		title: "Office Manager",
		description: "Pegasus Tech Venture",
		icon: "i-lucide-construction",
		url: "https://www.pegasustechventures.com/",
	},
	{
		date: "2014 - 2018",
		title: "Finance Manager",
		description: "PT. CLS Argos Indonesia",
		icon: "i-lucide-diameter",
		url: "https://www.clsargos.co.id/",
	},
	{
		date: "2012 - 2014",
		title: "Office Manager",
		description: "Cohn & Wolfe XPR",
		icon: "i-lucide-rectangle-circle",
		url: "https://companieshouse.id/cohn-wolfe-xpr",
	},
	{
		date: "2007 - 2012",
		title: "Finance Accounting & Tax Staff",
		description: "PT. Sodexo Motivation Solutions Indonesia",
		icon: "i-lucide-x",
		url: "https://id.sodexo.com/id-ID/",
	},
	{
		date: "2004 - 2007",
		title: "Reception and promoted to Purchasing Staff",
		description: "PT. Sodexo Motivation Solutions Indonesia",
		icon: "i-lucide-x",
		url: "https://id.sodexo.com/id-ID/",
	},
	{
		date: "2002 - 2004",
		title: "Manager Club",
		description: "Isola Bella Japanese Lounge",
		icon: "i-lucide-dessert",
		url: "https://www.tripadvisor.com/Restaurant_Review-g1121351-d3249569-Reviews-Isola_Bella-Shirahama_cho_Nishimuro_gun_Wakayama_Prefecture_Kinki.html",
	},
] satisfies TimelineItem[];
</script>

<template>
	<NuxtLayout name="default">
		<!-- Main Banner -->
		<section class="mb-36" id="home">
			<div
				class="flex flex-col md:flex-row grid-rows-2 gap-4 items-start md:items-center"
			>
				<div class="flex flex-col gap-6 w-full">
					<h1
						class="font-bold text-[22px] md:text-[44px] leading-8 md:leading-14"
					>
						{{ translations[locale.language].find((s) => s.section === 1).hey }}
						<span class="text-primary">Office|HR|Country Manager</span>
					</h1>

					<p class="text-bg dark:text-secondary">
						{{
							translations[locale.language].find((s) => s.section === 1).desc
						}}
					</p>

					<button class="btn btn-sm md:btn-md btn-primary w-fit">
						{{
							translations[locale.language].find((s) => s.section === 1).button
						}}
					</button>
				</div>

				<div class="flex flex-col w-full items-center md:items-right">
					<img
						src="/images/banner-first.png"
						class="w-[20rem] md:w-full"
						alt="Banner First"
					/>

					<div class="border p-2 md:mx-26 w-[20rem] md:w-fit">
						<div class="flex flex-row gap-3 items-center justify-center">
							<div class="p-2 bg-primary"></div>
							<p class="text-[10px] md:text-[16px]">
								{{
									translations[locale.language].find((s) => s.section === 1)
										.available
								}}
								<strong
									>{{
										translations[locale.language].find((s) => s.section === 1)
											.new_project
									}}
								</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-36" id="quotes">
			<div class="relative border p-4 max-w-auto md:max-w-2xl md:mx-auto">
				<!-- Tanda petik kanan atas -->
				<div
					class="absolute top-2 left-2 w-8 h-8 flex items-center justify-center text-gray-400 text-3xl select-none"
				>
					<UIcon name="ri:double-quotes-l" class="size-6" />
				</div>

				<!-- Text quote -->
				<p class="text-sm md:text-lg text-center px-4">
					{{
						translations[locale.language].find((s) => s.section === 2).caption
					}}
				</p>

				<!-- Tanda petik kiri bawah -->
				<div
					class="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center text-gray-400 text-3xl select-none"
				>
					<UIcon name="ri:double-quotes-r" class="size-6" />
				</div>
			</div>
		</section>

		<section class="mb-36" id="career-overview">
			<div class="flex flex-col gap-6">
				<div class="flex flex-row md:justify-between gap-14 items-center">
					<div class="flex flex-row items-center gap-2 md:gap-5">
						<p class="text-2xl md:text-3xl">
							<span class="text-primary">#</span
							>{{
								translations[locale.language].find((s) => s.section === 3).title
							}}
						</p>
						<div class="w-[80px] md:w-[420px] h-[1px] bg-primary"></div>
					</div>
				</div>

				<div class="flex flex-col md:flex-row grid-rows-4 gap-4 md:items-start">
					<div class="w-full">
						<p class="text-lg md:text-3xl my-6">
							{{
								translations[locale.language].find((s) => s.section === 3)
									.caption_1
							}}:
						</p>
						<UTimeline :items="items" :default-value="20" class="w-96">
							<template #development-title="{ item }">
								<a
									:href="item.url"
									target="_blank"
									class="hover:text-primary transition-colors duration-200 cursor-pointer"
									@click.stop
								>
									<div class="flex items-center gap-1">
										<span>{{ item.title }}</span>
									</div>
								</a>
							</template>

							<template #description="{ item }">
								<div class="flex items-center gap-1">
									<a
										:href="item.url"
										target="_blank"
										class="hover:text-primary transition-colors duration-200 cursor-pointer"
										@click.stop
									>
										<span class="text-sm text-gray-600 dark:text-gray-400">{{
											item.description
										}}</span>
									</a>
								</div>
							</template>
						</UTimeline>
					</div>

					<div class="w-full flex flex-col">
						<p class="text-lg md:text-3xl my-6">
							{{
								translations[locale.language].find((s) => s.section === 3)
									.caption_2
							}}:
						</p>
						<div class="border border-secondary p-4 w-fit mb-5">
							<p class="text-lg md:text-lg">
								{{
									translations[locale.language].find((s) => s.section === 3)
										.education
								}}
							</p>
							<p class="text-lg md:text-lg">STIE Dharma Bumiputera | 2012</p>
						</div>

						<p class="text-lg md:text-3xl my-6">
							{{
								translations[locale.language].find((s) => s.section === 3)
									.caption_4
							}}:
						</p>
						<div class="border border-secondary p-4 w-fit">
							<ul class="list-disc px-4 flex flex-col gap-2">
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.achievements_1
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.achievements_2
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.achievements_3
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.achievements_4
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.achievements_5
									}}
								</li>
							</ul>
						</div>
					</div>

					<div class="w-full flex flex-col">
						<p class="text-lg md:text-3xl my-6">
							{{
								translations[locale.language].find((s) => s.section === 3)
									.caption_3
							}}:
						</p>
						<div class="border border-secondary p-4 w-fit">
							<ul class="list-disc px-4 flex flex-col gap-2">
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_1
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_2
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_2
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_3
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_4
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_5
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_6
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_7
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_8
									}}
								</li>
								<li class="text-md">
									{{
										translations[locale.language].find((s) => s.section === 3)
											.competencies_9
									}}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ... (bagian lainnya tetap sama) -->
	</NuxtLayout>
</template>

<style>
section {
	scroll-margin-top: 100px; /* Adjust this value depending on your header height */
}

/* Style untuk link timeline */
.timeline-item-link {
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}

.timeline-item-link:hover {
	color: rgb(59 130 246); /* primary color */
	transform: translateX(2px);
}
</style>
