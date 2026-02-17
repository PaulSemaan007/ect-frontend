import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check for secret to confirm this is a valid request
    const secret =
      request.headers.get('x-revalidate-secret') || request.nextUrl.searchParams.get('secret');

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await request.json();
    const { path, tag } = body;

    if (!path && !tag) {
      return NextResponse.json({ message: 'Missing path or tag parameter' }, { status: 400 });
    }

    // Revalidate by path
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        type: 'path',
        value: path,
        now: Date.now(),
      });
    }

    // Note: revalidateTag in Next.js 16 requires a second parameter (type)
    // For now, just use path-based revalidation
    if (tag) {
      return NextResponse.json(
        {
          message:
            'Tag-based revalidation not yet implemented. Use path-based revalidation instead.',
          example: { path: '/blog' },
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      {
        message: 'Error revalidating',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

// Usage instructions
// POST to /api/revalidate with:
// - Header: x-revalidate-secret: your-secret OR query param ?secret=your-secret
// - Body: { "path": "/" } OR { "tag": "posts" }
//
// Example with WP Webhooks:
// URL: https://your-site.com/api/revalidate?secret=your-secret
// Body: { "path": "/blog/my-post" }
