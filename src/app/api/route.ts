import { NextResponse } from 'next/server';
import { dataSet } from '../../../data/dataSet';
export async function GET() {


    return NextResponse.json(dataSet);
}