import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // TODO: Implement WordPress preview mode
  // This scaffold provides the basic structure for preview functionality

  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const _postType = searchParams.get('type') || 'post';

  // TODO: Add authentication with WordPress Application Passwords
  // const auth = request.headers.get('authorization');
  // Validate auth against WordPress

  if (!id) {
    return NextResponse.json({ message: 'Missing post ID' }, { status: 400 });
  }

  // TODO: Fetch preview content from WordPress
  // const previewData = await fetchPreviewContent(id, postType);

  // TODO: Enable Next.js draft mode
  // draftMode().enable();

  // TODO: Redirect to the preview page
  // return NextResponse.redirect(new URL(`/preview/${postType}/${id}`, request.url));

  return NextResponse.json({
    message: 'Preview mode not yet implemented',
    instructions: [
      '1. Set up WordPress Application Passwords',
      '2. Implement authentication check',
      '3. Fetch preview content from WordPress GraphQL',
      '4. Enable Next.js draft mode',
      '5. Redirect to preview page',
    ],
    todo: 'See comments in src/app/api/preview/route.ts for implementation details',
  });
}

/*
 * Implementation guide:
 *
 * 1. WordPress Setup:
 *    - Create Application Password in WordPress
 *    - Add WORDPRESS_AUTH_REFRESH_TOKEN to .env.local
 *
 * 2. Authentication:
 *    - Validate request has valid WordPress auth token
 *    - Or check against a preview secret
 *
 * 3. Fetch Preview:
 *    - Query WordPress GraphQL with preview: true
 *    - Use post/page ID and status filter
 *
 * 4. Next.js Draft Mode:
 *    - Import { draftMode } from 'next/headers'
 *    - Call draftMode().enable()
 *
 * 5. Preview Pages:
 *    - Create /preview/[type]/[id]/page.tsx
 *    - Check draftMode().isEnabled
 *    - Fetch with cache: 'no-store' when in draft mode
 *
 * Example WordPress preview link:
 * https://your-site.com/api/preview?id=123&type=post&secret=your-secret
 */
