import Spotlightstudio from "../../../../src/emails/../../emails/index";
import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const { email, name, message } = await request.json();
	try {
		const { data, error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "sptlghtstudio@gmail.com",
			subject: `Nova proposta de ${message}`,	
			react: Spotlightstudio({ name, email,message })
		});
		return NextResponse.json({data, error});
	}
	catch (error) {
		return NextResponse.json({error});
	}	
}
